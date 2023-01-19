/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

// import { AxiosResponseHeaders } from 'axios';
import Component from '../../base/Component';
import State from '../../base/State';
import EventEmitter from '../../base/EventEmitter';

import TracksListItem from '../TracksListItem';

import { totalCount } from '../../constants/API';
import { errorMessage } from '../../constants';

import { Car } from '../../models/API';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

class RaceTracksList extends Component<Tags.ul> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.ul,
      classList: ['race-tracks-list'],
      parent: parent.node,
    });
    this.on(CustomEvents.updateCars, this.onUpdate);
    console.log(EventEmitter.listeners);
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
    const carsCount = `${headers[totalCount]}`;
    State.carsCount = +carsCount;
    this.emit(CustomEvents.updateAmount, []);

    cars.forEach((car) => {
      State.cars.set(car.name, car);
      const racer = new TracksListItem(this, car);
    });
  };
}

export default RaceTracksList;
