import Component from '../../base/Component';
import Router from '../../base/Router';
import Loader from '../../base/Loader';

import Tags from '../../enums/Tags';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';

interface AppComponent {
  load: (...args: Array<unknown>) => void;
}

@Loader()
class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor(readonly fragment: DocumentFragment, private readonly router: Router) {
    super({
      tagName: Tags.div,
      classList: ['root'],
    });
    if (AppComponent.count > 0) return;
    AppComponent.count += 1;
    this.node.append(fragment);
    document.body.append(this.node);
    this.load({
      method: RequestMethods.get,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
      options: {},
      cb: this.emit,
    });
    this.load({
      method: RequestMethods.get,
      queryString: `${API.winnersLink}?_page=1&_limit=10`,
      eventName: CustomEvents.getWinners,
      options: {},
      cb: this.emit,
    });
  }
}

export default AppComponent;
