/* eslint-disable import/no-useless-path-segments */
import Component from '../../base/Component';

import { CustomEvents, Routes, Tags, TitleKeys } from '../../enums';

import { AbstractStore, Update } from '../../models';

import Store from '../../decorators/Store';

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
    this.init();

    this.on(CustomEvents.updateCars, this.update);
    this.on(CustomEvents.changeView, <T>(arg: T): void => this.onViewChange(arg, this.update));
  }

  private init = (): void => {
    this.update();
  };

  public update = (): void => {
    if (!this.storeKey) {
      this.node.textContent = '';
    } else {
      this.node.textContent = `#${this.store[this.storeKey]}`;
    }
  };

  private onViewChange = <T>(arg: T, update: Update): void => {
    if (arg === Routes.garage) {
      this.storeKey = TitleKeys.garage;
    }

    if (arg === Routes.winners) {
      this.storeKey = TitleKeys.winners;
    }

    if (arg !== Routes.garage && arg !== Routes.winners) {
      this.storeKey = null;
    }
    update();
  };
}

export default new Subtitle();
