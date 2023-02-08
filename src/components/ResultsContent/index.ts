/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

import Component from '../../base/Component';
import Store from '../../base/Store';

import ResultsItem from '../ResultsItem';

import { errorMessage } from '../../constants';
import { totalCount } from '../../constants/API';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Winner } from '../../models/API';
import { isCountedDataResponse, isWinners } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

import styles from './index.css';

interface ResultsContent extends AbstractStore {
  load: (...args: Array<unknown>) => void;
}

@Store()
class ResultsContent extends Component<Tags.div> {
  protected readonly winner: Winner | null = null;
  constructor() {
    super({
      tagName: Tags.div,
      classList: [styles.results],
    });
    this.on(CustomEvents.getWinners, this.onGetWinners);
  }

  private onGetWinners = <T>(args: T): void => {
    if (!isCountedDataResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    const { headers, data } = args;
    // Temp
    this.updateWinnersCount(+headers[totalCount]);
    this.addWinner(data);
  };

  private updateWinnersCount = (num: number): void => {
    this.store.winnersCount = num;
    this.emit(CustomEvents.updateHeading, []);
  };

  private addWinner = async (winners: Array<Winner>): Promise<void> => {
    for (let index = 0; index < winners.length; index += 1) {
      try {
        const winnerData = winners[index];
        const { id } = winnerData;
        const { data } = await axios.get(`${API.garageLink}/${id}`);
        const winner = new ResultsItem(this, { ...winnerData, ...data, index });
      } catch {
        console.error();
      }
    }
  };
}

export default new ResultsContent();
