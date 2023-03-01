/* eslint-disable import/order */
import axios from 'axios';

import Component from '../../base/Component';

import Btn from '../../ui/Button';

import { ControlPanelBtns, Props } from './types';

import { errorMessage } from '../../constants';

import { API, Btns, CustomEvents, RequestMethods, Tags } from '../../enums';

import { AbstractLoader } from '../../models';
import { isCar } from '../../models/predicates';

import styles from './index.css';

interface ControlPanel extends AbstractLoader {
  btns: ControlPanelBtns;
  name: string;
  color: string;
  id: number;
}

class ControlPanel extends Component<Tags.div> {
  constructor({ parent, carData: { name, color, id }, handlers: { startDriving, stopDriving } }: Props) {
    super({
      tagName: Tags.div,
      classList: [styles.panel],
      parent: parent.node,
    });

    this.btns = {
      select: new Btn({
        parent: this,
        text: Btns.select,
        isDisabled: false,
      }),
      start: new Btn({
        parent: this,
        text: Btns.start,
        isDisabled: false,
      }),
      reset: new Btn({
        parent: this,
        text: Btns.reset,
        isDisabled: true,
      }),
      remove: new Btn({
        parent: this,
        text: Btns.remove,
        isDisabled: false,
      }),
    };

    this.name = name;
    this.color = color;
    this.id = id;

    this.btns.select.node.onclick = (): void =>
      this.emit(CustomEvents.selectCar, {
        name: this.name,
        color: this.color,
        id: this.id,
      });

    this.btns.start.node.onclick = (): void => {
      ControlPanel.changeBtnsState(this.btns);
      startDriving();
    };

    this.btns.reset.node.onclick = (): void => {
      ControlPanel.changeBtnsState(this.btns);
      stopDriving();
    };

    this.btns.remove.node.onclick = this.onDeleteCar;
    this.on(CustomEvents.selectCar, this.onSelectCar);
  }

  private static changeBtnsState = ({ select, start, reset, remove }: ControlPanelBtns): void => {
    [select, start, reset, remove].forEach(({ node }) => {
      // eslint-disable-next-line no-param-reassign
      node.disabled = !node.disabled;
    });
  };

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
