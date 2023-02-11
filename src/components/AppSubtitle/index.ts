import Component from '../../base/Component';

import Store from '../../decorators/Store';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';
import TitleKeys from '../../enums/TitleKeys';

import { AbstractStore } from '../../models/StoreType';

interface Subtitle extends AbstractStore {
  key: TitleKeys;
}

@Store()
class Subtitle extends Component<Tags.h2> {
  constructor() {
    super({
      tagName: Tags.h2,
      classList: ['subtitle'],
    });
    this.key = TitleKeys.garage;
    this.on(CustomEvents.updateCurrentPage, this.update);
    this.update();
  }

  private update = (): void => {
    this.node.textContent = `#${this.store[this.key]}`;
  };
}

export default new Subtitle();
