/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';
import ResultsItem from '../ResultsItem';
import State from '../../base/State';

import styles from './index.css';
import { isCountedDataResponse, isWinners } from '../../models/Predicates';
import { Winner } from '../../models/API';
import { errorMessage } from '../../constants';

const { results } = styles;

class ResultsContent extends Component<Tags.div> {
  private readonly winner: Winner | null = null;
  constructor() {
    super({
      tagName: Tags.div,
      classList: [results],
    });
    this.on(CustomEvents.getWinners, this.onGetWinners);
  }

  onGetWinners = <T>(args: T) => {
    if (!isCountedDataResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    // Temp
    this.updateWinnersCount(+headers['x-total-count']);
    this.addWinner(data);
  };

  updateWinnersCount = (num: number) => {
    State.winnersCount = num;
  };

  addWinner = (winners: Array<Winner>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    winners.forEach((winnerData) => new ResultsItem(this, winnerData));
  };
}

const resultsContent = new ResultsContent();

export default resultsContent;
