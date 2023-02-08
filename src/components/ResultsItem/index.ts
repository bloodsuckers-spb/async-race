/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';
import Loader from '../../base/Loader';

import CarCell from '../../ui/Winners/components/CarCell';
import TableCell from '../../ui/Winners/components/TableCell';

import { errorMessage } from '../../constants';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { HashType } from '../../models';
import { Winner } from '../../models/API';
import { isCar, isResponse } from '../../models/Predicates';

import styles from './index.css';

const { winner } = styles;

interface ResultsItem {
  load: (...args: Array<unknown>) => void;
  numberCell: TableCell;
  nameCell: TableCell;
  winsCell: TableCell;
  bestTimeCell: TableCell;
  carCell: CarCell;
}

@Loader()
class ResultsItem extends Component<Tags.div> {
  private color: HashType = '#000';
  private name = '';
  private id = 0;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, winnerData: Winner, index: number) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    const { id, wins, time } = winnerData;

    this.id = id;

    this.numberCell = new TableCell(`${index}`);
    this.nameCell = new TableCell(`${id}`);
    this.winsCell = new TableCell(`${wins}`);
    this.bestTimeCell = new TableCell(`${time}`);
    this.carCell = new CarCell(this.color);

    const { numberCell, carCell, nameCell, winsCell, bestTimeCell } = this;
    const children = [numberCell, carCell, nameCell, winsCell, bestTimeCell];
    this.append(...children);

    this.on(CustomEvents.updateCar, this.onUpdate);
    this.on(CustomEvents.getCar, this.onUpdate);

    this.load({
      method: RequestMethods.get,
      queryString: `${API.garageLink}/${id}`,
      eventName: CustomEvents.getCar,
      options: {},
      cb: this.emit,
    });
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
}

export default ResultsItem;
