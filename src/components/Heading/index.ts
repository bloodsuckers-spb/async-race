/* eslint-disable @typescript-eslint/comma-dangle */
import Component from '../../base/Component';
import State from '../../base/State';

import CustomEvents from '../../enums/CustomEvents';
import HeadingKeys from '../../enums/HeadingKeys';
import Tags from '../../enums/Tags';
import Views from '../../enums/Views';

class Heading extends Component<Tags.h1> {
  constructor(
    private readonly viewName: Views,
    private readonly key: HeadingKeys
  ) {
    super({
      tagName: Tags.h1,
      classList: ['title'],
    });
    this.on(CustomEvents.updateAmount, this.update);
    this.emit(CustomEvents.updateAmount, []);
  }

  update = () => {
    this.node.textContent = `${this.viewName}(${State[this.key]})`;
  };
}

export default Heading;
