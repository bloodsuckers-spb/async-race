import Component from '../../../../base/Component';

import Store from '../../../../decorators/Store';

import CustomEvents from '../../../../enums/CustomEvents';
import Tags from '../../../../enums/Tags';

import { Emit } from '../../../../models';
import { AbstractStore } from '../../../../models/StoreType';

interface PrevBtn extends AbstractStore {}
@Store()
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

    this.node.onclick = (): void => this.hadleClick(this.emit);
    // this.on(CustomEvents.updateCarsAmout, this.update);
    this.on(CustomEvents.changeView, this.onViewChange);
  }

  // eslint-disable-next-line class-methods-use-this
  private onViewChange = (): void => console.log('onViewChange');

  private hadleClick = (emit: Emit): void => {
    this.store.garageCurrentPage -= 1;
    emit(CustomEvents.changeCurrentPage, {});
  };
}

export default PrevBtn;
