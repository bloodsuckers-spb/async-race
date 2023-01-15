import Component from '../../base/Component';
import Btn from '../Button';
import Btns from '../../enums/Btns';

class ControlPanel extends Component<'div'> {
  select: Btn;
  start: Btn;
  reset: Btn;
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'div',
      classList: ['control-panel'],
      parent: parent.node,
    });
    this.select = new Btn(this, Btns.select);
    this.start = new Btn(this, Btns.start);
    this.reset = new Btn(this, Btns.reset);
  }
}

export default ControlPanel;
