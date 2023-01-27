/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';
import Winner from '../ResultsItem';

import styles from './index.css';
import { isCountedDataResponse, isWinners } from '../../models/Predicates';
import { errorMessage } from '../../constants';

const { results } = styles;

class ResultsContent extends Component<Tags.div> {
  private readonly winner: Winner | null = null;
  constructor() {
    super({
      tagName: Tags.div,
      classList: [results],
    });
    this.on(CustomEvents.updateWinners, this.onUpdate);
  }

  onUpdate = <T>(args: T) => {
    if (!isCountedDataResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    console.log('onUpdate');
    console.log(headers, data);
    this.addWinner(data);
  };

  addWinner = (winners: Array<any>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    winners.forEach((winner) => new Winner(this));
  };
}

const resultsContent = new ResultsContent();

export default resultsContent;
