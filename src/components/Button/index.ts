import Component from '../../base/Component';
import Btns from '../../enums/Btns';

class Btn extends Component<'button'> {
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, text: Btns) {
    super({
      tagName: 'button',
      classList: ['btn'],
      nodeProps: {
        textContent: text,
      },
      parent: parent.node,
    });
  }
}

export default Btn;
