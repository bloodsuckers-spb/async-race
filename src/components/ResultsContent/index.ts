/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';
import TableRow from '../Winner';

class ResultsContent extends Component<Tags.div> {
  row: TableRow | null = null;
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['results-content'],
      nodeProps: {
        textContent: 'results',
      },
    });
    this.on(CustomEvents.updateWinners, this.onUpdate);
  }

  onUpdate = <T>(arg: T) => {
    console.log('onUpdate');
    console.log(arg);
  };

  addWinner = (winners: Array<any>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    winners.forEach((winner) => new TableRow(this));
  };
}

const resultsContent = new ResultsContent();

export default resultsContent;
