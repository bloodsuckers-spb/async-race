/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';
import State from '../../base/State';
import EventEmitter from '../../base/EventEmitter';

import TracksListItem from '../TracksListItem';

import { totalCount } from '../../constants/API';
import { errorMessage } from '../../constants';

import { Car, NewCar, GetCarsResponse } from '../../models/API';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

const isNewCar = <T>(data: T | NewCar): data is NewCar => {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  if (!('id' in data) || !('body' in data)) {
    return false;
  }
  return true;
};

const isCarsResponse = () => {};

class RaceTracksList extends Component<Tags.ul> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.ul,
      classList: ['race-tracks-list'],
      parent: parent.node,
    });
    this.on(CustomEvents.updateCars, this.onUpdate);
    this.on(CustomEvents.createNewCar, this.onCarAdded);
  }

  onUpdate = <T>(args: T) => {
    if (typeof args !== 'object' || args === null || !('headers' in args)) {
      throw new Error(errorMessage);
    }
    if (!('data' in args) || !Array.isArray(args.data)) {
      throw new Error(errorMessage);
    }
    if (typeof args.headers !== 'object' || args.headers === null || !(totalCount in args.headers)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    const cars: Array<Car> = data;
    // const carsCount = `${headers[totalCount]}`;
    // this.incrementCarsCount(+carsCount);
    this.emit(CustomEvents.updateAmount, {});

    cars.forEach((car) => {
      this.addCarToStore(car);
      // State.cars.set(car.name, car);
      // this.render(car);
      // const racer = new TracksListItem(this, car);
    });
  };

  onCarAdded = <T>(arg: T) => {
    if (typeof arg !== 'object' || arg === null || !('data' in arg)) {
      throw new Error(errorMessage);
    }
    if (!isNewCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.createCar(arg.data);
  };

  private createCar = ({ id, body }: NewCar) => {
    const car: Car = Object.assign(JSON.parse(body), { id });
    this.addCarToStore(car);
  };

  private addCarToStore = (car: Car) => {
    if (State.cars.get(car.name)) {
      return;
    }
    State.cars.set(car.name, car);
    this.incrementCarsCount();
    this.render(car);
  };

  private incrementCarsCount = (amount = 1) => {
    State.carsCount += amount;
    this.emit(CustomEvents.updateAmount, {});
  };

  private render = (car: Car) => new TracksListItem(this, car);
}

export default RaceTracksList;
