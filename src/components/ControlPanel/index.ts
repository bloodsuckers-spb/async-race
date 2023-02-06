import Component from '../../base/Component';

import Btn from '../../ui/Button';

import Btns from '../../enums/Btns';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Car } from '../../models/API';

class ControlPanel extends Component<Tags.div> {
  protected readonly select: Btn;
  protected readonly start: Btn;
  protected readonly reset: Btn;
  protected readonly remove: Btn;
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: Tags.div,
      classList: ['control-panel'],
      parent: parent.node,
    });
    this.select = new Btn(this, Btns.select);
    this.start = new Btn(this, Btns.start);
    this.reset = new Btn(this, Btns.reset);
    this.remove = new Btn(this, Btns.remove);
    this.select.node.onclick = () => this.emit(CustomEvents.selectCar, { name, color, id });
    this.reset.node.disabled = true;
  }
}

export default ControlPanel;
