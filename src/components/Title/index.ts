import Component from '../../base/Component';
import Store from '../../base/Store';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';
import TitleKeys from '../../enums/TitleKeys';

import { AbstractStore } from '../../models/StoreType';

interface Title extends AbstractStore {}

@Store()
class Title extends Component<Tags.h2> {
  constructor(private readonly key: TitleKeys) {
    super({
      tagName: Tags.h2,
      classList: ['subtitle'],
    });
    this.on(CustomEvents.updateCurrentPage, this.update);
    this.update();
  }

  private update = (): void => {
    this.node.textContent = `Page #${this.store[this.key]}`;
  };
}

export default Title;
