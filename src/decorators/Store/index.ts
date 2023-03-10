/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import AppStore from '../../store';
import { Store as StoreType } from '../../store/types';

const Store = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T =>
    class extends Constructor {
      protected get store(): StoreType {
        return AppStore;
      }
    };
};

export default Store;
