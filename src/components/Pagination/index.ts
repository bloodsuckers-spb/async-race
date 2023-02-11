import Component from '../../base/Component';

import Store from '../../decorators/Store';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { AbstractStore } from '../../models/StoreType';

interface Pagination extends AbstractStore {}

@Store()
class Pagination extends Component<Tags.div> {
  constructor(protected prev: Component<Tags.button>, protected next: Component<Tags.button>) {
    super({
      tagName: Tags.div,
      classList: ['pagination'],
    });
    this.append(prev, next);
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

export default Pagination;
