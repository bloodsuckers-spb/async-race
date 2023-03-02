/* eslint-disable import/order */
import Component from '../../base/Component';

import { CustomEvents, HeadingKeys, Routes, Tags, Views } from '../../enums';

import { AbstractStore } from '../../models';

import Store from '../../decorators/Store';

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
    if (arg === Routes.garage) {
      this.viewName = Views.garage;
      this.storeKey = HeadingKeys.garage;
    }

    if (arg === Routes.winners) {
      this.viewName = Views.winners;
      this.storeKey = HeadingKeys.winners;
    }

    if (arg !== Routes.garage && arg !== Routes.winners) {
      this.viewName = null;
      this.storeKey = null;
    }
  };
}

export default new AppHeading();
