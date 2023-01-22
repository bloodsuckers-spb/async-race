/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';
import TableRow from '../TableRow';

class TableBody extends Component<Tags.tbody> {
  row: TableRow | null = null;
  constructor(parent: Component<Tags.table>) {
    super({
      tagName: Tags.tbody,
      classList: ['tbody'],
      nodeProps: {
        textContent: 'tableBody',
      },
      parent: parent.node,
    });
    this.on(CustomEvents.updateWinners, this.onUpdate);
  }

  onUpdate = <T>(arg: T) => {
    console.log('onUpdate');
    console.log(arg);
  };

  addTableRow = (winners: Array<any>) => {
    winners.forEach((winner) => new TableRow(this));
  };
}

export default TableBody;
