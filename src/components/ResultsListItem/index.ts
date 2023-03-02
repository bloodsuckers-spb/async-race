/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';

import CarCell from '../../ui/Winners/components/CarCell';
import TableCell from '../../ui/Winners/components/TableCell';

import { errorMessage } from '../../constants';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';
import RequestMethods from 'enums/RequestMethods';

import { AbstractLoader } from '../../models';
import { isCar, isResponse } from '../../models/predicates';

import Loader from '../../decorators/Loader';

import { Props } from './types';

import styles from './index.css';

const { winner } = styles;

interface ResultsItem extends AbstractLoader, Props {
  numberCell: TableCell;
  nameCell: TableCell;
  winsCell: TableCell;
  bestTimeCell: TableCell;
  carCell: CarCell;
}

@Loader()
class ResultsItem extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>, winnerData: Props) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    const { id, wins, time, name, color, index } = winnerData;

    this.id = id;
    this.color = color;

    this.numberCell = new TableCell(`${index + 1}`);
    this.nameCell = new TableCell(`${name}`);
    this.winsCell = new TableCell(`${wins}`);
    this.bestTimeCell = new TableCell(`${time}`);
    this.carCell = new CarCell(this.color);

    const { numberCell, carCell, nameCell, winsCell, bestTimeCell } = this;
    const children = [numberCell, carCell, nameCell, winsCell, bestTimeCell];
    this.append(...children);

    this.on(CustomEvents.updateCar, this.onUpdate);
    this.on(CustomEvents.removeCar, this.onRemove);
    this.on(CustomEvents.deleteWinner, this.destroy);
  }

  private onUpdate = <T>(args: T): void => {
    if (!isResponse(args) || !isCar(args.data)) {
      throw new Error(errorMessage);
    }

    const { color, name, id } = args.data;
    const { node } = this.carCell.carSvg;
    const { nameCell } = this;

    if (this.id !== id) {
      return;
    }

    if (color !== this.color) {
      this.color = color;
      node.style.fill = color;
    }

    if (name !== this.name) {
      this.name = name;
      nameCell.node.textContent = name;
    }
  };

  private onRemove = <T>(id: T): void | false => {
    if (typeof id !== 'number') {
      throw new Error(errorMessage);
    }

    if (id !== this.id) {
      return;
    }

    this.load({
      method: RequestMethods.delete,
      queryString: `${API.winnersLink}/${this.id}`,
      eventName: CustomEvents.deleteWinner,
      cb: this.emit,
    });
  };
}

export default ResultsItem;
