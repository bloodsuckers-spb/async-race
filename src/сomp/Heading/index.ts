/* eslint-disable @typescript-eslint/comma-dangle */
import Component from '../../base/Component';
import State from '../../base/State';

import HeadingKeys from '../../enums/HeadingKeys';
import Views from '../../enums/Views';

class Heading extends Component<'h1'> {
  constructor(
    protected readonly parent: Component<keyof HTMLElementTagNameMap>,
    private readonly viewName: Views,
    private readonly key: HeadingKeys
  ) {
    super({
      tagName: 'h1',
      classList: ['title'],
      parent: parent.node,
    });
    this.on('updateAmount', this.update);
    this.update();
  }

  update = () => {
    this.node.textContent = `${this.viewName}(${State[this.key]})`;
  };
}

export default Heading;
