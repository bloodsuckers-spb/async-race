import Component from '../../base/Component';
import State from '../../base/State';

import TitleKeys from '../../enums/TitleKeys';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

class Title extends Component<Tags.h2> {
  constructor(private readonly key: TitleKeys) {
    super({
      tagName: Tags.h2,
      classList: ['subtitle'],
    });
    this.on(CustomEvents.updateCurrentPage, this.update);
    this.update();
  }

  update = () => {
    this.node.textContent = `Page #${State[this.key]}`;
  };
}

export default Title;
