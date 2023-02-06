/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import State from '../../base/State';

import ResultsItem from '../ResultsItem';

import { errorMessage } from '../../constants';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Winner } from '../../models/API';
import { isCountedDataResponse, isWinners } from '../../models/Predicates';

import styles from './index.css';

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

  private onGetWinners = <T>(args: T) => {
    if (!isCountedDataResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    // Temp
    this.updateWinnersCount(+headers['x-total-count']);
    this.addWinner(data);
  };

  private updateWinnersCount = (num: number) => {
    State.winnersCount = num;
  };

  private addWinner = (winners: Array<Winner>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    winners.forEach((winnerData) => new ResultsItem(this, winnerData));
  };
}

const resultsContent = new ResultsContent();

export default resultsContent;
