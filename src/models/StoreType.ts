import { Car } from 'models/API';

type StoreType = {
  cars: Map<Car['name'], Car>;
  winners: Map<any, any>;
  carsCount: number;
  winnersCount: number;
  garageCurrentPage: number;
  winnersCurrentPage: number;
};

export interface AbstractStore {
  store: StoreType;
}

export default StoreType;
