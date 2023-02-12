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
    this.on(CustomEvents.addCar, this.onCarAdded);
  }

  private onUpdate = <T>(args: T): void => {
    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    args.data.forEach((car) => this.render(car));
  };

  private onCarAdded = <T>(arg: T): void => {
    const { drawedCars, carsCount } = this.store;
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }
    if (drawedCars.has(`${arg.data.id}`) || carsCount >= 5) {
      return;
    }
    this.render(arg.data);
  };

  private render = (car: Car): RaceListItem => new RaceListItem(this, car);
}

export default new RaceList();
