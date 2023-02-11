/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
import AppStore from '../../store';

import StoreType from '../../models/StoreType';

const Store = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T =>
    class extends Constructor {
      protected get store(): StoreType {
        return AppStore;
      }
    };
};

export default Store;
