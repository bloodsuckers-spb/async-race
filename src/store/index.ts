import { Store } from './types';

const AppStore: Store = {
  racers: new Set(),
  drawedCars: new Map(),
  drawedWinners: new Map(),
  carsAmount: 0,
  winnersAmount: 0,
  garageCurrentPage: 1,
  winnersCurrentPage: 1,
  set carsCount(count: number) {
    this.carsAmount = count;
  },
  get carsCount() {
    return this.carsAmount;
  },

  set winnersCount(count: number) {
    this.winnersAmount = count;
  },

  get winnersCount() {
    return this.winnersAmount;
  },
};

export default AppStore;
