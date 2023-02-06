import Component from '../../base/Component';

import Btns from '../../enums/Btns';
import Tags from '../../enums/Tags';

class Btn extends Component<Tags.button> {
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, text: Btns) {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: text,
      },
      parent: parent.node,
    });
  }
}

export default Btn;
