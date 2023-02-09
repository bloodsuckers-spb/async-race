/* eslint-disable import/order */
import axios from 'axios';

import Component from '../../base/Component';
import Loader from '../../base/Loader';

import Btn from '../../ui/Button';

import { errorMessage } from '../../constants';

import API from '../../enums/API';
import Btns from '../../enums/Btns';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { AbstractLoader } from '../../models';
import { Car } from '../../models/API';
import { isCar } from '../../models/Predicates';

interface ControlPanel extends AbstractLoader {
  select: Btn;
  start: Btn;
  reset: Btn;
  remove: Btn;

  name: string;
  color: string;
  id: number;
}

@Loader()
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

    this.remove.node.onclick = this.onDeleteCar;

    this.reset.node.disabled = true;

    this.on(CustomEvents.selectCar, this.onSelectCar);
  }

  private onSelectCar = <T>(data: T): void => {
    if (!isCar(data)) {
      throw new Error(errorMessage);
    }
    const { color, name, id } = data;

    if (this.id !== id) {
      return;
    }

    if (color !== this.color) {
      this.color = color;
    }

    if (name !== this.name) {
      this.name = name;
    }
  };

  private onDeleteCar = (): void => {
    axios[RequestMethods.delete](`${API.garageLink}/${this.id}`)
      .then(() => this.emit(CustomEvents.removeCar, this.id))
      .catch(() => console.error);
  };
}

export default ControlPanel;
