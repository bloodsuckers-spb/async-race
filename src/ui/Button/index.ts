import Component from '../../base/Component';

import Btns from '../../enums/Btns';
import Tags from '../../enums/Tags';

type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  text: Btns;
  isDisabled: boolean;
};

class Btn extends Component<Tags.button> {
  constructor({ parent, text, isDisabled }: Props) {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: text,
      },
      parent: parent.node,
    });
    this.node.disabled = isDisabled;
  }
}

export default Btn;
