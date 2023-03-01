/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import Component from '../../base/Component';

import { AppState } from 'components';
import Router from 'components/AppRouter';

import { AsyncFetch, Loader, Store } from '../../decorators';

import { Props } from './types';

import { CustomEvents, RequestMethods, Tags } from '../../enums';

import { AbstractFetch, AbstractLoader, AbstractStore, CallBack, Emit, Load } from '../../models';

interface App extends AbstractLoader, AbstractFetch, AbstractStore {
  router: Router;
  appState: AppState;
}

@Loader()
@Store()
@AsyncFetch()
class App extends Component<Tags.div> {
  private static count = 0;
  private static limit = {
    carsLimit: 5,
    winnersLimit: 10,
  };
  constructor({ root, fragment, router, appState }: Props) {
    super({
      tagName: Tags.div,
      classList: ['root'],
    });

    if (App.count > 0) return;
    App.count += 1;

    this.router = router;
    this.appState = appState;
    this.node.append(fragment);
    root.append(this.node);

    this.on(CustomEvents.removeCar, () => this.onRemoveCar(this.loadGarage, this.emit));
    this.on(CustomEvents.changeCurrentPage, () => this.loadGarage(this.load));
    this.on(CustomEvents.carsLoading, () => this.loadGarage(this.load));

    App.init(
      () => this.loadGarage(this.load),
      () => this.loadWinners(this.emit)
    );
  }

  private static init = (loadGarage: CallBack, loadWinners: CallBack): void => {
    loadGarage();
    loadWinners();
  };

  private loadGarage = (load: Load): void => {
    const { garageCurrentPage } = this.store;
    console.log(this.GARAGE_URL);
    load({
      method: RequestMethods.get,
      cb: this.emit,
      queryString: `${this.GARAGE_URL}?_page=${garageCurrentPage}&_limit=${App.limit.carsLimit}`,
      eventName: CustomEvents.updateCars,
    });
  };

  private loadWinners = (emit: Emit): void => {
    const { winnersCurrentPage } = this.store;
    this.fetchCountedData({
      method: 'GET',
      queryString: `${this.WINNERS_URL}?_page=${winnersCurrentPage}&_limit=${App.limit.winnersLimit}}`,
      eventName: 'GetWinners',
      emit,
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

export default App;
