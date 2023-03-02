/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
import Component from '../../base/Component';

import RaceListItem from '../RaceListItem';

import Store from '../../decorators/Store';

import { CustomEvents, Tags } from '../../enums';

import { AbstractStore, Car } from 'models';
import { Render } from './types';

import { isCar, isCars, isCountedDataResponse, isResponse } from '../../models/predicates';

import styles from './index.css';

interface RaceList extends AbstractStore {}

@Store()
class RaceList extends Component<Tags.ul> {
  protected static readonly listSize = 5;
  constructor() {
    super({
      tagName: Tags.ul,
      classList: [styles.list],
    });

    this.on(CustomEvents.updateCars, <T>(args: T): void => this.onUpdate(args, this.render));
    this.on(CustomEvents.addCar, <T>(args: T): void => this.onCreateCar(args, this.render));
  }

  private onUpdate = <T>(args: T, render: Render): void => {
    const { drawedCars } = this.store;

    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error('Type of props is not valid');
    }

    if (!drawedCars.size) {
      args.data.forEach((car) => {
        render(car);
      });
      return;
    }

    if (drawedCars.size === RaceList.listSize) {
      drawedCars.clear();
      this.node.textContent = '';
      args.data.forEach((car) => {
        render(car);
      });
    } else {
      args.data.forEach((car) => {
        if (!drawedCars.has(car.id)) {
          render(car);
        }
      });
    }
  };

  private onCreateCar = <T>(arg: T, render: Render): void => {
    const { carsCount } = this.store;
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error('Type of props is not valid');
    }
    if (carsCount >= RaceList.listSize) {
      return;
    }
    render(arg.data);
  };

  private render = (car: Car): RaceListItem => new RaceListItem(this, car);
}

export default new RaceList();
