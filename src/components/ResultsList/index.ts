/* eslint-disable import/order */
/* eslint-disable no-await-in-loop */
import axios from 'axios';

import Component from '../../base/Component';

import Store from '../../decorators/Store';
import ResultsItem from '../ResultsListItem';

import { errorMessage } from '../../constants';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { Winner } from '../../models/API';
import { isCountedDataResponse, isWinners } from '../../models/predicates';
import { AbstractStore } from 'models';

import styles from './index.css';

interface ResultsContent extends AbstractStore {}

@Store()
class ResultsContent extends Component<Tags.div> {
  protected readonly winner: Winner | null = null;
  constructor() {
    super({
      tagName: Tags.div,
      classList: [styles.results],
    });
    this.on(CustomEvents.getWinners, <T>(args: T) => {
      this.addWinners(ResultsContent.onGetWinners(args));
    });
  }

  private static onGetWinners = <T>(args: T): Array<Winner> => {
    if (!isCountedDataResponse(args) || !isWinners(args.data)) {
      throw new Error(errorMessage);
    }
    return args.data;
  };

  private addWinners = async (winners: Array<Winner>): Promise<void> => {
    for (let index = 0; index < winners.length; index += 1) {
      try {
        const winnerData = winners[index];
        const { id } = winnerData;
        const { data } = await axios.get(`${API.garageLink}/${id}`);
        ((): ResultsItem => new ResultsItem(this, { ...winnerData, ...data, index }))();
      } catch {
        console.error();
      }
    }
  };
}

export default new ResultsContent();
