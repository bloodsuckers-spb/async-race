/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

// import { AxiosResponseHeaders } from 'axios';
import Component from '../../base/Component';
import State from '../../base/State';

import Racer from '../Racer';

import { totalCount } from '../../constants/API';
import { errorMessage } from '../../constants';

import { Car } from '../../models/API';

class RaceTracksList extends Component<'ul'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'ul',
      classList: ['race-tracks-list'],
      nodeProps: {
        textContent: 'RaceTracksList',
      },
      parent: parent.node,
    });
    this.on('updateCars', this.onUpdate);
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
    this.emit('updateAmount', []);

    cars.forEach((car) => {
      State.cars.set(car.name, car);
      const racer = new Racer(this);
    });
  };
}

export default RaceTracksList;
