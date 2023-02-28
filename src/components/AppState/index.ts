/* eslint-disable function-paren-newline */
import EventEmitter from '../../base/EventEmitter';

import Store from '../../decorators/Store';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import CustomEvents from '../../enums/CustomEvents';

import { AbstractStore, Emit, EmitCallback, Update } from '../../models';
import { isCars, isResponse, isWinners } from '../../models/predicates';

interface AppState extends AbstractStore {}

@Store()
class AppState extends EventEmitter {
  private static count = 0;
  constructor() {
    super();
    if (AppState.count > 0) return;
    AppState.count += 1;

    this.on(CustomEvents.updateCars, <T>(args: T): void => {
      this.onUpdateCars(args);
      AppState.updateHeading(this.emit);
      this.emit(CustomEvents.updateCarsAmout, {});
    });

    this.on(CustomEvents.addCar, (): void => {
      this.incrementCars(() => AppState.updateHeading(this.emit));
      this.emit(CustomEvents.updateCarsAmout, {});
    });

    this.on(CustomEvents.eraseCar, (): void => {
      this.decrementCars(() => AppState.updateHeading(this.emit));
      this.emit(CustomEvents.updateCarsAmout, {});
    });

    this.on(CustomEvents.getWinners, <T>(args: T): void => {
      this.onUpdateWinners(args);
      AppState.updateHeading(this.emit);
    });

    this.on(CustomEvents.deleteWinner, () => this.decrementWinners(() => AppState.updateHeading(this.emit)));

    this.on(CustomEvents.clickNextGaragePage, () =>
      this.incrementGaragePage(() => AppState.updateCurrentPage(this.emit))
    );

    this.on(CustomEvents.clickPrevGaragePage, () =>
      this.decrementGaragePage(() => AppState.updateCurrentPage(this.emit))
    );

    this.on(CustomEvents.generateCars, (): void => {
      const { loadCars, updateHeading } = AppState;
      this.onGenerateCars(loadCars, updateHeading, this.emit);
    });
  }

  private static updateHeading = (emit: Emit): void => {
    emit(CustomEvents.updateHeading, {});
  };

  private static updateCurrentPage = (emit: Emit): void => {
    emit(CustomEvents.changeCurrentPage, {});
  };

  private static loadCars = (emit: Emit): void => {
    emit(CustomEvents.carsLoading, {});
  };

  private onUpdateWinners = <T>(args: T): void => {
    if (!isResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    this.store.winnersCount = +args.headers[totalCount];
  };

  private onUpdateCars = <T>(args: T): void => {
    if (!isResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    this.store.carsCount = +args.headers[totalCount];
  };

  private decrementCars = (update: Update): void => {
    this.store.carsCount -= 1;
    update();
  };

  private incrementCars = (update: Update): void => {
    this.store.carsCount += 1;
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

  private incrementGaragePage = (update: Update): void => {
    this.store.garageCurrentPage += 1;
    update();
  };

  private decrementGaragePage = (update: Update): void => {
    this.store.garageCurrentPage -= 1;
    update();
  };

  private onGenerateCars = (load: EmitCallback, updateHeading: EmitCallback, emit: Emit): void => {
    this.store.carsCount += 15;
    const { carsCount, garageCurrentPage } = this.store;
    if (carsCount % (garageCurrentPage * 5) > 0) {
      load(emit);
    } else {
      updateHeading(emit);
    }
  };
}

export default AppState;
