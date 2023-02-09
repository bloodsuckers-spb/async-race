import Component from '../../base/Component';
import Store from '../../base/Store';

import TracksListItem from '../TracksListItem';

import { errorMessage } from '../../constants';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Car } from '../../models/API';
import { isCar, isCars, isCountedDataResponse, isResponse } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

import styles from './index.css';
// import { totalCount } from '../../constants/API';

interface RaceTracksList extends AbstractStore {}

@Store()
class RaceTracksList extends Component<Tags.ul> {
  constructor() {
    super({
      tagName: Tags.ul,
      classList: [styles.list],
    });

    this.on(CustomEvents.updateCars, this.onUpdate);
    this.on(CustomEvents.createNewCar, this.onCarAdded);
    this.on(CustomEvents.updateCar, this.onCarUpdated);
  }

  private onCarUpdated = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.updateCar(arg.data);
  };

  private updateCar = (data: Car): void => {
    this.store.cars.set(`${data.id}`, data);
  };

  private onUpdate = <T>(args: T): void => {
    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    // const { headers, data } = args;
    const { data } = args;
    // const carsCount = headers[totalCount];
    // this.incrementCarsCount(+carsCount);
    // this.emit(CustomEvents.updateHeading, {});

    data.forEach((car) => this.addCarToStore(car));
  };

  private onCarAdded = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.createCar(arg.data);
  };

  private createCar = (data: Car): void => {
    // this.incrementCarsCount();
    this.addCarToStore(data);
  };

  private addCarToStore = (car: Car): void => {
    const { cars } = this.store;
    if (cars.get(`${car.id}`)) {
      return;
    }
    cars.set(`${car.id}`, car);
    this.render(car);
  };

  // private incrementCarsCount = (amount = 1): void => {
  //   this.store.carsCount += amount;
  //   this.emit(CustomEvents.updateHeading, {});
  // };

  private render = (car: Car): TracksListItem => new TracksListItem(this, car);
}

export default new RaceTracksList();
