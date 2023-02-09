import EventEmitter from '../../base/EventEmitter';
import Store from '../../base/Store';

import { Update } from '../AppComponent/types';

import { Emit } from './types';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import CustomEvents from '../../enums/CustomEvents';

import { isCars, isResponse } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

interface AppStore extends AbstractStore {}

@Store()
class AppStore extends EventEmitter {
  private static count = 0;
  constructor() {
    super();

    if (AppStore.count > 0) return;
    AppStore.count += 1;

    this.on(CustomEvents.updateCars, <T>(args: T): void => {
      this.onUpdateCars(args);
      AppStore.updateHeading(this.emit);
    });
    this.on(CustomEvents.removeCar, () => this.decrementCars(() => AppStore.updateHeading(this.emit)));
    this.on(CustomEvents.deleteWinner, () => this.decrementWinners(() => AppStore.updateHeading(this.emit)));
  }

  private static updateHeading = (emit: Emit): void => {
    emit(CustomEvents.updateHeading, []);
  };

  private onUpdateCars = <T>(args: T): void => {
    if (!isResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers } = args;
    this.store.carsCount = +headers[totalCount];
  };

  private decrementCars = (update: Update): void => {
    this.store.carsCount -= 1;
    update();
  };

  private incrementCars = (update: Update): void => {
    this.store.carsCount -= 1;
    update();
  };

  private decrementWinners = (update: Update): void => {
    this.store.winnersAmount -= 1;
    update();
  };

  private incrementWinners = (update: Update): void => {
    this.store.winnersAmount += 1;
    update();
  };
}

export default AppStore;
