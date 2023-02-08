/* eslint-disable import/order */
import Component from '../../base/Component';

import Btn from '../../ui/Button';

import { errorMessage } from '../../constants';

import Btns from '../../enums/Btns';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Car } from '../../models/API';
import { isCar, isResponse } from '../../models/Predicates';

interface ControlPanel {
  select: Btn;
  start: Btn;
  reset: Btn;
  remove: Btn;

  name: string;
  color: string;
  id: number;
}

class ControlPanel extends Component<Tags.div> {
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

    this.name = name;
    this.color = color;
    this.id = id;

    this.select.node.onclick = (): void =>
      this.emit(CustomEvents.selectCar, {
        name: this.name,
        color: this.color,
        id: this.id,
      });

    this.reset.node.disabled = true;

    this.on(CustomEvents.updateCar, this.onUpdate);
  }

  private onUpdate = <T>(args: T): void => {
    if (!isResponse(args) || !isCar(args.data)) {
      throw new Error(errorMessage);
    }
    const { color, name } = args.data;

    if (color !== this.color) {
      this.color = color;
    }

    if (name !== this.name) {
      this.name = name;
    }
  };
}

export default ControlPanel;
