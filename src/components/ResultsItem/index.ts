/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';
import Cell from '../../ui/Winners/components/Cell';
import CarCell from '../../ui/Winners/components/CarCell';

import styles from './index.css';

import Tags from '../../enums/Tags';
import { Winner } from '../../models/API';

const { winner } = styles;

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
