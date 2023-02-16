/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import Component from '../../base/Component';

import Router from 'components/AppRouter';
import AppState from 'components/AppState';

import Loader from '../../decorators/Loader';
import Store from '../../decorators/Store';

import { Props } from './types';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { AbstractLoader, CallBack, Emit, Load } from '../../models';
import { AbstractStore } from '../../models/StoreType';

interface AppComponent extends AbstractLoader, AbstractStore {
  router: Router;
  appState: AppState;
}

@Loader()
@Store()
class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor({ root, fragment, router, appState }: Props) {
    super({
      tagName: Tags.div,
      classList: ['root'],
    });

    if (AppComponent.count > 0) return;
    AppComponent.count += 1;

    this.router = router;
    this.appState = appState;
    this.node.append(fragment);
    root.append(this.node);

    this.on(CustomEvents.removeCar, () => this.onRemoveCar(this.loadGarage, this.emit));

    AppComponent.init(
      () => this.loadGarage(this.load),
      () => this.loadWinners(this.load)
    );
  }

  private static init = (loadGarage: CallBack, loadWinners: CallBack): void => {
    loadGarage();
    loadWinners();
  };

  private loadGarage = (load: Load): void => {
    const { garageCurrentPage } = this.store;
    load({
      method: RequestMethods.get,
      cb: this.emit,
      queryString: `${API.garageLink}?_page=${garageCurrentPage}&_limit=5`,
      eventName: CustomEvents.updateCars,
    });
  };

  private loadWinners = (load: Load): void => {
    const { winnersCurrentPage } = this.store;
    load({
      method: RequestMethods.get,
      cb: this.emit,
      queryString: `${API.winnersLink}?_page=${winnersCurrentPage}&_limit=10`,
      eventName: CustomEvents.getWinners,
    });
  };

  private onRemoveCar = (loadGarage: (load: Load) => void, emit: Emit): void => {
    const { carsAmount } = this.store;
    if (carsAmount <= 5) {
      emit(CustomEvents.eraseCar, {});
    } else {
      loadGarage(this.load);
    }
  };
}

export default AppComponent;
