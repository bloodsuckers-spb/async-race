import EventEmitter from '../EventEmitter';

import { Car } from '../../models/API';

abstract class State extends EventEmitter {
  static cars: Map<Car['name'], Car> = new Map();
  static winners = new Set();
  static carsCount: number = 4;
  static winnersCount: number = 1;
}

export default State;
