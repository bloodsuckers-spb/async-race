/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';
import Loader from '../../base/Loader';
import Cell from '../../ui/Winners/components/Cell';
import CarCell from '../../ui/Winners/components/CarCell';

import styles from './index.css';

import Tags from '../../enums/Tags';
import { Winner } from '../../models/API';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';

const { winner } = styles;

interface ResultsItem {
  load: (...args: Array<unknown>) => void;
}

@Loader()
class ResultsItem extends Component<Tags.div> {
  numberCell: Cell;
  carCell: CarCell;
  nameCell: Cell;
  winsCell: Cell;
  bestTimeCell: Cell;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, winnerData: Winner) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    const { id, wins, time } = winnerData;

    this.load({
      method: RequestMethods.get,
      queryString: `${API.garageLink}/${id}`,
      eventName: CustomEvents.getCar,
      options: {},
      cb: this.emit,
    });

    this.numberCell = new Cell();
    this.carCell = new CarCell();
    this.nameCell = new Cell(`${id}`);
    this.winsCell = new Cell(`${wins}`);
    this.bestTimeCell = new Cell(`${time}`);
    const { numberCell, carCell, nameCell, winsCell, bestTimeCell } = this;
    const children = [numberCell, carCell, nameCell, winsCell, bestTimeCell];
    this.append(...children);
  }
}

export default ResultsItem;
