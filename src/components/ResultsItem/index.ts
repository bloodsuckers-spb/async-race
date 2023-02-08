/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';
import Loader from '../../base/Loader';

import CarCell from '../../ui/Winners/components/CarCell';
import Cell from '../../ui/Winners/components/Cell';

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
  numberCell: Cell;
  nameCell: Cell;
  winsCell: Cell;
  bestTimeCell: Cell;
  carCell: CarCell;
  color: HashType;
  name: string;
}

@Loader()
class ResultsItem extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>, winnerData: Winner) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    this.color = '#000';
    this.name = 'Hi';

    const { id, wins, time } = winnerData;

    this.numberCell = new Cell();
    this.carCell = new CarCell();
    this.nameCell = new Cell(`${id}`);
    this.winsCell = new Cell(`${wins}`);
    this.bestTimeCell = new Cell(`${time}`);
    const { numberCell, carCell, nameCell, winsCell, bestTimeCell } = this;
    const children = [numberCell, carCell, nameCell, winsCell, bestTimeCell];
    this.append(...children);

    this.load({
      method: RequestMethods.get,
      queryString: `${API.garageLink}/${id}`,
      eventName: CustomEvents.getCar,
      options: {},
      cb: this.emit,
    });

    this.on(CustomEvents.updateCar, this.onUpdate);
  }

  private onUpdate = <T>(args: T): void => {
    if (!isResponse(args) || !isCar(args.data)) {
      throw new Error(errorMessage);
    }

    const { color, name } = args.data;
    const { node } = this.carCell.carSvg;
    const { nameCell } = this;

    if (color !== this.color) {
      node.style.fill = color;
    }

    if (name !== this.name) {
      nameCell.node.textContent = name;
    }
  };
}

export default ResultsItem;
