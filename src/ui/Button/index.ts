import Component from '../../base/Component';

import Btns from '../../enums/Btns';
import Tags from '../../enums/Tags';

type Props = {
  text: Btns;
  isDisabled: boolean;
};

class Btn extends Component<Tags.button> {
  constructor({ text, isDisabled }: Props) {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: text,
      },
    });
    this.node.disabled = isDisabled;
  }
}

export default Btn;
