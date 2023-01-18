import Component from '../../base/Component';
import State from '../../base/State';

import TitleKeys from '../../enums/TitleKeys';
import CustomEvents from '../../enums/CustomEvents';

class Title extends Component<'h2'> {
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, private readonly key: TitleKeys) {
    super({
      tagName: 'h2',
      classList: ['subtitle'],
      parent: parent.node,
    });
    this.on(CustomEvents.updateCurrentPage, this.update);
    this.update();
  }

  update = () => {
    this.node.textContent = `Page #${State[this.key]}`;
  };
}

export default Title;
