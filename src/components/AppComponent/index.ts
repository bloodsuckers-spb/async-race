import Component from '../../base/Component';
import Router from '../../base/Router';

import Tags from '../../enums/Tags';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';

class AppComponent extends Component<Tags.div> {
  private static count = 0;
  constructor(readonly fragment: DocumentFragment, private readonly router: Router) {
    super({
      tagName: Tags.div,
      classList: ['app-root'],
    });
    if (AppComponent.count > 0) return;
    AppComponent.count += 1;
    this.node.append(fragment);
    document.body.append(this.node);
    this.componentDidMount();
  }

  private componentDidMount = () => {
    this.load({
      method: RequestMethods.get,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
      options: {},
    });
    this.load({
      method: RequestMethods.get,
      queryString: `${API.winnersLink}?_page=1&_limit=10`,
      eventName: CustomEvents.updateWinners,
      options: {},
    });
  };
}

export default AppComponent;
