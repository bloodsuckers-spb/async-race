/* eslint-disable class-methods-use-this */

// Components & UI
import Component from '../../base/Component';
import State from '../../base/State';
import TracksListItem from '../TracksListItem';

// Constants
import { errorMessage } from '../../constants';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

// Types
import { Car } from '../../models/API';

// Predicates
import { isCar, isCars, isResponse, isCountedDataResponse } from '../../models/Predicates';

class RaceTracksList extends Component<Tags.ul> {
  constructor() {
    super({
      tagName: Tags.ul,
      classList: ['race-tracks-list'],
    });

    this.on(CustomEvents.updateCars, this.onUpdate);
    this.on(CustomEvents.createNewCar, this.onCarAdded);
    this.on(CustomEvents.updateSelectedCar, this.onCarUpdated);
  }

  private onUpdate = <T>(args: T) => {
    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    const carsCount = headers['x-total-count'];
    this.incrementCarsCount(+carsCount);
    this.emit(CustomEvents.updateAmount, {});

    data.forEach((car) => this.addCarToStore(car));
  };

  private onCarUpdated = <T>(arg: T) => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.updateCar(arg.data);
  };

  private onCarAdded = <T>(arg: T) => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.createCar(arg.data);
  };

  private createCar = (data: Car) => {
    this.incrementCarsCount();
    this.addCarToStore(data);
  };

  private updateCar = (data: Car) => {
    State.cars.set(`${data.id}`, data);
  };

  private addCarToStore = (car: Car) => {
    if (State.cars.get(`${car.id}`)) {
      return;
    }
    State.cars.set(`${car.id}`, car);
    this.render(car);
  };

  private incrementCarsCount = (amount = 1) => {
    State.carsCount += amount;
    this.emit(CustomEvents.updateAmount, {});
  };

  private render = (car: Car) => new TracksListItem(this, car);
}

const raceTrackList = new RaceTracksList();

export default raceTrackList;
