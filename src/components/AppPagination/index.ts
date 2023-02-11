/* eslint-disable import/order */
import Component from '../../base/Component';

import Next from './components/NextBtn';
import Prev from './components/PrevBtn';

import Store from '../../decorators/Store';
import Subtitle from '../AppSubtitle';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { AbstractStore } from '../../models/StoreType';

import styles from './index.css';

interface AppPagination extends AbstractStore {}

@Store()
class AppPagination extends Component<Tags.div> {
  constructor(
    protected prev: Component<Tags.button>,
    protected next: Component<Tags.button>,
    protected title: Component<Tags.h2>
  ) {
    super({
      tagName: Tags.div,
      classList: [styles.pagination],
    });
    this.append(prev, title, next);
    this.prev.node.onclick = this.onClickPrev;
    this.next.node.onclick = this.onClickNext;

    this.on(CustomEvents.updateGarage, this.onUpdate);
  }

  private onUpdate = (): void => {
    const { garageCurrentPage, carsAmount } = this.store;
    if (garageCurrentPage === 1 && carsAmount > 7) {
      this.next.node.disabled = false;
    }

    if (garageCurrentPage === carsAmount / 7) {
      this.next.node.disabled = true;
    }

    if (garageCurrentPage === 1 && carsAmount <= 7) {
      this.next.node.disabled = true;
    }

    if (garageCurrentPage === 1) {
      this.prev.node.disabled = true;
    }

    if (garageCurrentPage > 1) {
      const { node } = this.prev;
      if (node.disabled) {
        node.disabled = false;
      }
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private onClickNext = (): void => {
    console.log('onClickNext');
  };

  // eslint-disable-next-line class-methods-use-this
  private onClickPrev = (): void => {
    console.log('onClickPrev');
  };
}

export default new AppPagination(Prev, Next, Subtitle);
