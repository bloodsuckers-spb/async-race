import Component from '../../base/Component';

import Tags from '../../enums/Tags';

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
  }
}

export default AppComponent;
