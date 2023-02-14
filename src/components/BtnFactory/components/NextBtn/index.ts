import Component from '../../../../base/Component';

import Store from '../../../../decorators/Store';

import CustomEvents from '../../../../enums/CustomEvents';
import Tags from '../../../../enums/Tags';

import { Emit } from '../../../../models';
import { AbstractStore } from '../../../../models/StoreType';

interface NextBtn extends AbstractStore {}

@Store()
class NextBtn extends Component<Tags.button> {
  constructor() {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: 'Next',
        disabled: 'true',
      },
    });
    this.node.onclick = (): void => this.hadleClick(this.emit);

    this.on(CustomEvents.updateCarsAmout, this.update);
    this.on(CustomEvents.changeView, this.onViewChange);
  }

  // eslint-disable-next-line class-methods-use-this
  private onViewChange = (): void => console.log('onViewChange');

  private hadleClick = (emit: Emit): void => {
    this.store.garageCurrentPage += 1;
    // temp, TODO запрос
    emit(CustomEvents.changeCurrentPage, {});
  };

  private update = (): void => {
    const { garageCurrentPage, carsAmount } = this.store;
    if (this.store.carsAmount > 5 && this.node.disabled) {
      this.node.disabled = false;
    }
    if (garageCurrentPage === carsAmount / 5) {
      this.node.disabled = true;
    }
  };
}

export default NextBtn;
