import Component from '../../../../base/Component';

import Loader from '../../../../decorators/Loader';
import Store from '../../../../decorators/Store';

import API from '../../../../enums/API';
import CustomEvents from '../../../../enums/CustomEvents';
import RequestMethods from '../../../../enums/RequestMethods';
import Tags from '../../../../enums/Tags';

import { AbstractLoader } from '../../../../models';
import { AbstractStore } from '../../../../models/StoreType';

interface PrevBtn extends AbstractStore, AbstractLoader {}

@Store()
@Loader()
class PrevBtn extends Component<Tags.button> {
  constructor() {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: 'Prev',
        disabled: 'true',
      },
    });

    this.node.onclick = this.hadleClick;
    this.on(CustomEvents.updateCarsAmout, this.update);
    this.on(CustomEvents.changeView, this.onViewChange);
  }

  private update = (): void => {
    const { garageCurrentPage } = this.store;
    if (garageCurrentPage > 1 && this.node.disabled) {
      this.node.disabled = false;
    }
    if (garageCurrentPage === 1) {
      this.node.disabled = true;
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private onViewChange = (): void => console.log('onViewChange');

  private hadleClick = (): void => {
    this.store.garageCurrentPage -= 1;
    this.load({
      method: RequestMethods.get,
      queryString: `${API.garageLink}?_page=${this.store.garageCurrentPage}&_limit=5`,
      eventName: CustomEvents.updateCars,
      cb: this.emit,
    });
  };
}

export default PrevBtn;
