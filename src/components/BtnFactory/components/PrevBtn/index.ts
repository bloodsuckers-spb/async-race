import CustomEvents from '../../../../enums/CustomEvents';

import { AbstractLoader, AbstractStore } from '../../../../models';

import Loader from '../../../../decorators/Loader';
import Store from '../../../../decorators/Store';
import PaginationBtn from '../../PagintionBtn';

interface PrevBtn extends AbstractStore, AbstractLoader {}

@Store()
@Loader()
class PrevBtn extends PaginationBtn {
  constructor() {
    super({ text: 'Prev' });
    this.node.onclick = (): void => this.emit(CustomEvents.clickPrevGaragePage, {});
    this.on(CustomEvents.updateCarsAmout, this.setGarageState);
  }

  protected setGarageState = (): void => {
    const { garageCurrentPage } = this.store;
    this.setDisabledState(garageCurrentPage);
  };

  protected setWinnersState = (): void => {
    const { winnersCurrentPage } = this.store;
    this.setDisabledState(winnersCurrentPage);
  };

  private setDisabledState = (currentPage: number): void => {
    if (currentPage > 1 && this.node.disabled) {
      this.node.disabled = false;
    }
    if (currentPage === 1) {
      this.node.disabled = true;
    }
  };
}

export default PrevBtn;
