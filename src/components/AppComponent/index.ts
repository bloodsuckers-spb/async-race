/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import Component from '../../base/Component';
import Loader from '../../base/Loader';
import Store from '../../base/Store';
import Router from 'base/Router';

import { Props, Update } from './types';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { AbstractLoader } from '../../models';
import { isCars, isResponse } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

interface AppComponent extends AbstractLoader, AbstractStore {
  router: Router;
}

@Loader()
@Store()
class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor({ root, fragment, router }: Props) {
    super({
      tagName: Tags.div,
      classList: ['root'],
    });

    if (AppComponent.count > 0) return;
    AppComponent.count += 1;

    const getDataOptions = {
      method: RequestMethods.get,
      cb: this.emit,
    };

    const { garageCurrentPage, winnersCurrentPage } = this.store;

    this.router = router;
    this.node.append(fragment);
    root.append(this.node);

    this.load({
      ...getDataOptions,
      queryString: `${API.baseLink}/garage?_page=${garageCurrentPage}&_limit=7`,
      eventName: CustomEvents.updateCars,
    });

    this.load({
      ...getDataOptions,
      queryString: `${API.winnersLink}?_page=${winnersCurrentPage}&_limit=10`,
      eventName: CustomEvents.getWinners,
    });

    this.on(CustomEvents.updateCars, this.onUpdateCars);
    this.on(CustomEvents.removeCar, () => this.decrementCars(this.updateHeading));
    this.on(CustomEvents.deleteWinner, () => this.decrementWinners(this.updateHeading));
  }

  private onUpdateCars = <T>(args: T): void => {
    if (!isResponse(args) || !isCars(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers } = args;
    this.store.carsCount = +headers[totalCount];
    this.updateHeading();
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

  private updateHeading = (): void => {
    this.emit(CustomEvents.updateHeading, []);
  };
}

export default AppComponent;
