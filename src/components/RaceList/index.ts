/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import Component from '../../base/Component';

import Store from '../../decorators/Store';
import RaceListItem from '../RaceListItem';

import { Cache, Render } from './types';

import { CustomEvents, Tags } from '../../enums';

import { isCar, isCars, isCountedDataResponse, isResponse } from '../../models/predicates';
import { AbstractStore, Car } from 'models';

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

    this.on(CustomEvents.updateCars, <T>(args: T): void => this.onUpdate(args, this.addToCache, this.render));
    this.on(CustomEvents.addCar, <T>(args: T): void => this.onCreateCar(args, this.addToCache, this.render));
  }

  private onUpdate = <T>(args: T, addToCache: Cache, render: Render): void => {
    if (!isCountedDataResponse(args) || !isCars(args.data)) {
      throw new Error('Type of props is not valid');
    }
    const { drawedCars } = this.store;

    if (!drawedCars.size) {
      args.data.forEach((car) => {
        addToCache(car);
        render(car);
      });
      return;
    }

    if (drawedCars.size === RaceList.listSize) {
      drawedCars.clear();
      this.node.textContent = '';
      args.data.forEach((car) => {
        addToCache(car);
        render(car);
      });
    } else {
      args.data.forEach((car) => {
        if (!drawedCars.has(`${car.id}`)) {
          addToCache(car);
          render(car);
        }
      });
    }
  };

  private onCreateCar = <T>(arg: T, addToCache: Cache, render: Render): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error('Type of props is not valid');
    }
    const { carsCount } = this.store;
    if (carsCount >= 5) {
      return;
    }
    addToCache(arg.data);
    render(arg.data);
  };

  private addToCache = (car: Car): void => {
    this.store.drawedCars.set(`${car.id}`, car);
  };

  private render = (car: Car): RaceListItem => new RaceListItem(this, car);
}

export default new RaceList();
