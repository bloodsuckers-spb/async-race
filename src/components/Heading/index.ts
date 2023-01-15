/* eslint-disable @typescript-eslint/comma-dangle */
import Component from '../../base/Component';
import State from '../../base/State';

import HeadingKeys from '../../enums/HeadingKeys';
import Views from '../../enums/Views';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

class Heading extends Component<Tags.h1> {
  constructor(
    protected readonly parent: Component<keyof HTMLElementTagNameMap>,
    private readonly viewName: Views,
    private readonly key: HeadingKeys
  ) {
    super({
      tagName: Tags.h1,
      classList: ['title'],
      parent: parent.node,
    });
    this.on(CustomEvents.updateAmount, this.update);
    this.emit(CustomEvents.updateAmount, []);
  }

  update = () => {
    this.node.textContent = `${this.viewName}(${State[this.key]})`;
  };
}

export default Heading;
