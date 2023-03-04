/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-param-reassign */
import Component from '../../base/Component';

import Btn from '../../ui/Button';

import { AsyncFetch } from '../../decorators';

import { Btns, CustomEvents, Tags } from '../../enums';

import { AbstractFetch, AbstractLoader } from '../../models';

import { isCar } from '../../models/predicates';

import { ControlPanelBtns, Props } from './types';

import styles from './index.css';

interface ControlPanel extends AbstractLoader, AbstractFetch {
  btns: ControlPanelBtns;
  name: string;
  color: string;
  id: number;
}

@AsyncFetch()
class ControlPanel extends Component<Tags.div> {
  constructor({ parent, carData: { name, color, id }, handlers: { startDriving, stopDriving } }: Props) {
    super({
      tagName: Tags.div,
      classList: [styles.panel],
      parent: parent.node,
    });

    const props = [
      {
        text: Btns.select,
        isDisabled: false,
      },
      {
        text: Btns.start,
        isDisabled: false,
      },
      {
        text: Btns.reset,
        isDisabled: true,
      },
      {
        text: Btns.remove,
        isDisabled: false,
      },
    ];

    const [select, start, reset, remove] = props.map((data) => new Btn(data));

    this.btns = {
      select,
      start,
      reset,
      remove,
    };

    Object.assign(this, { name, color, id });
    this.append(select, start, reset, remove);

    this.btns.select.node.onclick = (): void =>
      this.emit(CustomEvents.selectCar, {
        name: this.name,
        color: this.color,
        id: this.id,
      });

    this.btns.start.node.onclick = (): void => {
      this.emit(CustomEvents.StartCarDriving, {});
      ControlPanel.changeBtnsState(this.btns);
      startDriving();
    };

    this.btns.reset.node.onclick = (): void => {
      this.emit(CustomEvents.ResetCarDriving, {});
      ControlPanel.changeBtnsState(this.btns);
      stopDriving();
    };

    this.btns.remove.node.onclick = this.onDeleteCar;
    this.on(CustomEvents.selectCar, this.onSelectCar);
    this.on(CustomEvents.StartRace, () => ControlPanel.disableAllBtns(this.btns, true));
    this.on(CustomEvents.ResetRace, () => ControlPanel.disableAllBtns(this.btns, false));
  }

  private static disableAllBtns = ({ select, start, reset, remove }: ControlPanelBtns, status: boolean): void => {
    [select, start, reset, remove].forEach(({ node }) => {
      node.disabled = status;
    });
    if (!status) {
      reset.node.disabled = true;
    }
  };

  private static changeBtnsState = ({ select, start, reset, remove }: ControlPanelBtns): void => {
    [select, start, reset, remove].forEach(({ node }) => {
      node.disabled = !node.disabled;
    });
  };

  private onSelectCar = <T>(data: T): void => {
    if (!isCar(data)) {
      throw new Error('Type of props is not valid');
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
    this.awaitedFetch({
      method: 'DELETE',
      queryString: `${this.GARAGE_URL}/${this.id}`,
    })
      .then(() => this.emit(CustomEvents.removeCar, this.id))
      .catch(() => console.error);
  };
}

export default ControlPanel;
