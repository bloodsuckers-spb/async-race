/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import StoreType from '../../models/StoreType';

const AppStore: StoreType = {
  cars: new Map(),
  winners: new Map(),
  carsCount: 0,
  winnersCount: 0,
  garageCurrentPage: 1,
  winnersCurrentPage: 1,
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
