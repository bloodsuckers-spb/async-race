/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
/* eslint-disable no-await-in-loop */
import axios from 'axios';

import Component from '../../base/Component';

import ResultsItem from '../ResultsListItem';

import { Store } from '../../decorators';

import { API, CustomEvents, Tags } from '../../enums';

import { isWinners } from '../../models/predicates';

import { AbstractStore, Winner } from 'models';

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
    this.on(CustomEvents.GetWinners, <T>(args: T) => {
      this.addWinners(this.onGetWinners(args));
    });
  }

  private onGetWinners = <T>(args: T): Array<Winner> => {
    if (typeof args !== 'object' || args === null) {
      throw new Error('Type of props is not valid');
    }

    if (!('data' in args) || !('count' in args)) {
      throw new Error('Type of props is not valid');
    }

    if (!isWinners(args.data)) {
      throw new Error('Type of props is not valid');
    }

    this.store.winnersCount = +`${args.count}`;
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
