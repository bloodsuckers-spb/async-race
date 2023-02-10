/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import Component from '../../base/Component';

import Router from 'components/AppRouter';
import AppStore from 'components/AppStore';

import Loader from '../../decorators/Loader';
import Store from '../../decorators/Store';

import { Props } from './types';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { AbstractLoader } from '../../models';
import { AbstractStore } from '../../models/StoreType';

interface AppComponent extends AbstractLoader, AbstractStore {
  router: Router;
  appStore: AppStore;
}

@Loader()
@Store()
class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor({ root, fragment, router, appStore }: Props) {
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
    this.appStore = appStore;
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
  }
}

export default AppComponent;
