import { Car } from '../../models/API';

abstract class State {
  protected static cars: Map<Car['name'], Car> = new Map();
  protected static winners = new Map();
  protected static carsCount = 0;
  protected static winnersCount = 0;
  protected static garageCurrentPage = 1;
  protected static winnersCurrentPage = 1;
}

export default State;
