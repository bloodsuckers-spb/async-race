import Component from '../../base/Component';

import Tags from '../../enums/Tags';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';

class AppComponent extends Component<Tags.div> {
  static count = 0;
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['app-root'],
      parent: document.body,
    });
    if (AppComponent.count > 0) return;
    AppComponent.count += 1;
    // Temporary
    this.load({
      method: RequestMethods.get,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
    });
  }
}

export default AppComponent;
