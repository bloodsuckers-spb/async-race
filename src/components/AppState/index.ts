import EventEmitter from '../../base/EventEmitter';

import Store from '../../decorators/Store';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import CustomEvents from '../../enums/CustomEvents';

import { Emit, Update } from '../../models';
import { Car } from '../../models/API';
import { isCar, isCars, isResponse, isWinners } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

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

    this.on(CustomEvents.addCar, <T>(arg: T): void => {
      this.addCarToStore(arg);
      this.incrementCars(() => AppState.updateHeading(this.emit));
      this.emit(CustomEvents.updateCarsAmout, {});
    });

    this.on(CustomEvents.updateCar, this.onUpdateCar);

    this.on(CustomEvents.removeCar, <T>(arg: T): void => {
      this.removeCarFromStore(arg);
      this.decrementCars(() => AppState.updateHeading(this.emit));
      this.emit(CustomEvents.updateCarsAmout, {});
    });

    this.on(CustomEvents.getWinners, <T>(args: T): void => {
      this.onUpdateWinners(args);
      AppState.updateHeading(this.emit);
    });

    this.on(CustomEvents.deleteWinner, () => this.decrementWinners(() => AppState.updateHeading(this.emit)));
  }

  private static updateHeading = (emit: Emit): void => {
    emit(CustomEvents.updateHeading, {});
  };

  private setCar = (data: Car): void => {
    this.store.drawedCars.set(`${data.id}`, data);
  };

  private removeCarFromStore = <T>(id: T): void => {
    if (typeof id === 'number') {
      this.store.drawedCars.delete(`${id}`);
    }
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
    args.data.forEach((car) => this.setCar(car));
  };

  private onUpdateCar = <T>(args: T): void => {
    if (!isResponse(args) || !isCar(args.data)) {
      throw new Error(errorMessage);
    }
    this.setCar(args.data);
  };

  private decrementCars = (update: Update): void => {
    this.store.carsCount -= 1;
    update();
  };

  private incrementCars = (update: Update): void => {
    this.store.carsCount += 1;
    update();
  };

  private addCarToStore = <T>(args: T): void => {
    if (!isResponse(args) || !isCar(args.data)) {
      throw new Error(errorMessage);
    }
    const { data } = args;
    const { drawedCars } = this.store;
    if (drawedCars.get(`${data.id}`)) {
      return;
    }
    drawedCars.set(`${data.id}`, data);
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

export default AppState;
