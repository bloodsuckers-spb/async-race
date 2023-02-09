/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import StoreType from '../../models/StoreType';

const AppStore: StoreType = {
  cars: new Map(),
  winners: new Map(),
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

const Store = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T =>
    class extends Constructor {
      protected get store(): StoreType {
        return AppStore;
      }
    };
};

export default Store;
