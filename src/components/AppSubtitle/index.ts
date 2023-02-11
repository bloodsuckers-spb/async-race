import Component from '../../base/Component';

import Store from '../../decorators/Store';

// import CustomEvents from '../../enums/CustomEvents';
import Routes from '../../enums/Routes';
import Tags from '../../enums/Tags';
import TitleKeys from '../../enums/TitleKeys';

import { AbstractStore } from '../../models/StoreType';

interface Subtitle extends AbstractStore {
  storeKey: TitleKeys | null;
}

@Store()
class Subtitle extends Component<Tags.h2> {
  constructor() {
    super({
      tagName: Tags.h2,
      classList: ['subtitle'],
    });
    this.storeKey = TitleKeys.garage;
    // this.on(CustomEvents.changeView, this.onViewChange);
    // this.on(CustomEvents.updateCurrentPage, this.update);
    this.update();
  }

  private update = (): void => {
    if (!this.storeKey) {
      this.node.textContent = '';
    } else {
      this.node.textContent = `#${this.store[this.storeKey]}`;
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private onViewChange = <T>(arg: T): void => {
    if (arg === Routes.garage) {
      this.storeKey = TitleKeys.garage;
    }

    if (arg === Routes.winners) {
      this.storeKey = TitleKeys.winners;
    }

    if (arg !== Routes.garage && arg !== Routes.winners) {
      this.storeKey = null;
    }
  };
}

export default new Subtitle();
