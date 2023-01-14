import EventEmitter from '../EventEmitter';

import { Car } from '../../models/API';

abstract class State extends EventEmitter {
  static cars: Map<Car['name'], Car> = new Map();
  static winners = new Set();
  static carsCount = 4;
  static winnersCount = 1;
  static garageCurrentPage = 1;
  static winnersCurrentPage = 1;
}

export default State;
