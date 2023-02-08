/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../../base/Component';

import CarCell from '../../ui/Winners/components/CarCell';
import TableCell from '../../ui/Winners/components/TableCell';

import { Props } from './types';

// import { errorMessage } from '../../constants';
// import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { AbstractLoader } from '../../models';

// import { isCar, isResponse } from '../../models/Predicates';
import styles from './index.css';

const { winner } = styles;

interface ResultsItem extends AbstractLoader, Props {
  numberCell: TableCell;
  nameCell: TableCell;
  winsCell: TableCell;
  bestTimeCell: TableCell;
  carCell: CarCell;
}

class ResultsItem extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>, winnerData: Props) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    const { id, wins, time, color, index } = winnerData;

    this.id = id;
    this.color = color;

    this.numberCell = new TableCell(`${index + 1}`);
    this.nameCell = new TableCell(`${id}`);
    this.winsCell = new TableCell(`${wins}`);
    this.bestTimeCell = new TableCell(`${time}`);
    this.carCell = new CarCell(this.color);

    const { numberCell, carCell, nameCell, winsCell, bestTimeCell } = this;
    const children = [numberCell, carCell, nameCell, winsCell, bestTimeCell];
    this.append(...children);

    // this.on(CustomEvents.updateCar, this.onUpdate);
    // this.on(CustomEvents.getCar, this.onUpdate);
  }

  // private onUpdate = <T>(args: T): void => {
  //   if (!isResponse(args) || !isCar(args.data)) {
  //     throw new Error(errorMessage);
  //   }

  //   const { color, name, id } = args.data;
  //   const { node } = this.carCell.carSvg;
  //   const { nameCell } = this;

  //   if (this.id !== id) {
  //     return;
  //   }

  //   if (color !== this.color) {
  //     this.color = color;
  //     node.style.fill = color;
  //   }

  //   if (name !== this.name) {
  //     this.name = name;
  //     nameCell.node.textContent = name;
  //   }
  // };
}

export default ResultsItem;
