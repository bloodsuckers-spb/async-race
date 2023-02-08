import Component from '../../base/Component';
import Loader from '../../base/Loader';
import Router from '../../base/Router';

import { Props } from './types';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

interface AppComponent {
  router: Router;
  load: (...args: Array<unknown>) => void;
}

@Loader()
class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor({ root, fragment, router }: Props) {
    super({
      tagName: Tags.div,
      classList: ['root'],
    });

    if (AppComponent.count > 0) return;
    AppComponent.count += 1;

    this.router = router;
    this.node.append(fragment);
    root.append(this.node);

    const getDataOptions = {
      method: RequestMethods.get,
      cb: this.emit,
    };

    this.load({
      ...getDataOptions,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
    });

    this.load({
      ...getDataOptions,
      queryString: `${API.winnersLink}?_page=1&_limit=10`,
      eventName: CustomEvents.getWinners,
    });
  }
}

export default AppComponent;
