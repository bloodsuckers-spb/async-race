import { Car } from 'models/API';

type StoreType = {
  cars: Map<Car['name'], Car>;
  winners: Map<any, any>;
  carsAmount: number;
  winnersAmount: number;
  garageCurrentPage: number;
  winnersCurrentPage: number;
  set carsCount(count: number);
  get carsCount(): number;
  set winnersCount(count: number);
  get winnersCount(): number;
};

export interface AbstractStore {
  store: StoreType;
}

export default StoreType;
