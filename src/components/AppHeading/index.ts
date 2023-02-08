import Component from '../../base/Component';
import Store from '../../base/Store';

import CustomEvents from '../../enums/CustomEvents';
import HeadingKeys from '../../enums/HeadingKeys';
import Tags from '../../enums/Tags';
import Views from '../../enums/Views';

import { AbstractStore } from '../../models/StoreType';

interface Heading extends AbstractStore {}

@Store()
class Heading extends Component<Tags.h1> {
  constructor(private readonly viewName: Views, private readonly key: HeadingKeys) {
    super({
      tagName: Tags.h1,
      classList: ['heading'],
    });
    this.on(CustomEvents.updateHeading, this.update);
    this.update();
  }

  private update = (): void => {
    this.node.textContent = `${this.viewName}(${this.store[this.key]})`;
  };
}

export default Heading;
