import Component from '../../../../base/Component';

import Loader from '../../../../decorators/Loader';
import Store from '../../../../decorators/Store';

import CustomEvents from '../../../../enums/CustomEvents';
import Tags from '../../../../enums/Tags';

import { AbstractLoader } from '../../../../models';
import { AbstractStore } from '../../../../models/StoreType';

interface NextBtn extends AbstractStore, AbstractLoader {}

@Store()
@Loader()
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

    this.node.onclick = (): void => this.emit(CustomEvents.clickNextGaragePage, {});
    this.on(CustomEvents.updateCarsAmout, this.update);
    this.on(CustomEvents.changeView, this.onViewChange);
  }

  // eslint-disable-next-line class-methods-use-this
  private onViewChange = (): void => console.log('onViewChange');

  private update = (): void => {
    const { garageCurrentPage, carsAmount } = this.store;
    console.log(garageCurrentPage, carsAmount);
    if (carsAmount > 5 && this.node.disabled) {
      this.node.disabled = false;
    }
    if (garageCurrentPage === Math.ceil(carsAmount / 5)) {
      this.node.disabled = true;
    }
  };
}

export default NextBtn;
