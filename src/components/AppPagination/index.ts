/* eslint-disable class-methods-use-this */
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
    protected readonly prev: Component<Tags.button>,
    protected readonly next: Component<Tags.button>,
    protected readonly title: typeof Subtitle
  ) {
    super({
      tagName: Tags.div,
      classList: [styles.pagination],
    });
    this.append(prev);
    this.append(title);
    this.append(next);
    this.prev.node.onclick = this.onClickPrev;
    this.next.node.onclick = this.onClickNext;
    console.log(this.title);
    this.on(CustomEvents.updateCarsAmout, this.update);
    this.on(CustomEvents.changeView, this.onViewChange);
  }

  private onViewChange = (): void => console.log('onViewChange');

  private update = (): void => {
    const { garageCurrentPage, carsAmount } = this.store;
    if (this.store.carsAmount > 5 && this.next.node.disabled) {
      this.next.node.disabled = false;
    }
    if (garageCurrentPage === carsAmount / 5) {
      this.next.node.disabled = true;
    }
  };

  private onClickNext = (): void => {
    this.store.garageCurrentPage += 1;
    // temp, TODO запрос
    this.title.update();
  };

  private onClickPrev = (): void => {
    this.store.garageCurrentPage -= 1;
  };
}

export default new AppPagination(Prev, Next, Subtitle);
