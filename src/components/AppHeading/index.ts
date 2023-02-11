import Component from '../../base/Component';

import Store from '../../decorators/Store';

import CustomEvents from '../../enums/CustomEvents';
import HeadingKeys from '../../enums/HeadingKeys';
import Tags from '../../enums/Tags';
import Views from '../../enums/Views';

import { AbstractStore } from '../../models/StoreType';

interface AppHeading extends AbstractStore {
  viewName: Views | null;
  storeKey: HeadingKeys | null;
}

@Store()
class AppHeading extends Component<Tags.h1> {
  constructor() {
    super({
      tagName: Tags.h1,
      classList: ['heading'],
    });
    this.viewName = Views.garage;
    this.storeKey = HeadingKeys.garage;
    this.on(CustomEvents.changeView, <T>(arg: T): void => {
      this.onViewChange(arg);
      this.update();
    });
    this.on(CustomEvents.updateHeading, this.update);
    this.update();
  }

  private update = (): void => {
    if (!this.viewName || !this.storeKey) {
      this.node.textContent = '';
    } else {
      this.node.textContent = `${this.viewName} (${this.store[this.storeKey]})`;
    }
  };

  private onViewChange = <T>(arg: T): void => {
    if (arg === '/') {
      this.viewName = Views.garage;
      this.storeKey = HeadingKeys.garage;
    }

    if (arg === '/winners') {
      this.viewName = Views.winners;
      this.storeKey = HeadingKeys.winners;
    }

    if (arg !== '/' && arg !== '/winners') {
      this.viewName = null;
      this.storeKey = null;
    }
  };
}

export default new AppHeading();
