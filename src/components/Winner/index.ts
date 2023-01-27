import Component from '../../base/Component';

import Tags from '../../enums/Tags';

class Winner extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.div,
      classList: ['winner'],
      parent: parent.node,
    });
  }
}

export default Winner;
