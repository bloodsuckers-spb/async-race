import Component from '../../base/Component';

import Store from '../../decorators/Store';
import RaceListItem from '../RaceListItem';

import { errorMessage } from '../../constants';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Car } from '../../models/API';
import { isCar, isCars, isCountedDataResponse, isResponse } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

import styles from './index.css';

interface RaceList extends AbstractStore {}

@Store()
class RaceList extends Component<Tags.ul> {
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
    const { data } = args;

    data.forEach((car) => this.addCarToStore(car));
  };

  private onCarAdded = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    this.createCar(arg.data);
  };

  private createCar = (data: Car): void => {
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

  private render = (car: Car): RaceListItem => new RaceListItem(this, car);
}

export default new RaceList();
