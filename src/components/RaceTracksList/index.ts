import Component from '../../base/Component';
import State from '../../base/State';

import TracksListItem from '../TracksListItem';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Car } from '../../models/API';
import { isCar, isCars, isCountedDataResponse, isResponse } from '../../models/Predicates';

import styles from './index.css';

class RaceTracksList extends Component<Tags.ul> {
  constructor() {
    super({
      tagName: Tags.ul,
      classList: [styles.list],
    });

    this.on(CustomEvents.updateCars, this.onUpdate);
    this.on(CustomEvents.createNewCar, this.onCarAdded);
    this.on(CustomEvents.updateCar, RaceTracksList.onCarUpdated);
  }

  private static onCarUpdated = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    RaceTracksList.updateCar(arg.data);
  };

  private static updateCar = (data: Car): void => {
    State.cars.set(`${data.id}`, data);
  };

  private onUpdate = <T>(args: T): void => {
    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    const carsCount = headers[totalCount];
    this.incrementCarsCount(+carsCount);
    this.emit(CustomEvents.updateAmount, {});

    data.forEach((car) => this.addCarToStore(car));
  };

  private onCarAdded = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.createCar(arg.data);
  };

  private createCar = (data: Car): void => {
    this.incrementCarsCount();
    this.addCarToStore(data);
  };

  private addCarToStore = (car: Car): void => {
    if (State.cars.get(`${car.id}`)) {
      return;
    }
    State.cars.set(`${car.id}`, car);
    this.render(car);
  };

  private incrementCarsCount = (amount = 1): void => {
    State.carsCount += amount;
    this.emit(CustomEvents.updateAmount, {});
  };

  private render = (car: Car): TracksListItem => new TracksListItem(this, car);
}

const raceTrackList = new RaceTracksList();

export default raceTrackList;
