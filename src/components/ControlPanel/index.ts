import Component from '../../base/Component';
import Btn from '../../ui/Button';
import Btns from '../../enums/Btns';
import { Car } from '../../models/API';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';

class ControlPanel extends Component<Tags.div> {
  readonly select: Btn;
  readonly start: Btn;
  readonly reset: Btn;
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: Tags.div,
      classList: ['control-panel'],
      parent: parent.node,
    });
    this.select = new Btn(this, Btns.select);
    this.start = new Btn(this, Btns.start);
    this.reset = new Btn(this, Btns.reset);
    this.select.node.onclick = () => this.emit(CustomEvents.selectCar, { name, color, id });
  }
}

export default ControlPanel;
