import { Car } from '../../models/API';

abstract class State {
  static cars: Map<Car['name'], Car> = new Map();
  static winners = new Map();
  static carsCount = 0;
  static winnersCount = 0;
  static garageCurrentPage = 1;
  static winnersCurrentPage = 1;
}

export default State;
