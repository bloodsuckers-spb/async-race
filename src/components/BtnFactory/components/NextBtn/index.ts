import Loader from '../../../../decorators/Loader';
import Store from '../../../../decorators/Store';
import PaginationBtn from '../../PagintionBtn';

import CustomEvents from '../../../../enums/CustomEvents';

import { AbstractLoader } from '../../../../models';
import { AbstractStore } from '../../../../models/StoreType';

type StateProps = {
  currentPage: number;
  amount: number;
  limit: number;
};

interface NextBtn extends AbstractStore, AbstractLoader {}

@Store()
@Loader()
class NextBtn extends PaginationBtn {
  constructor() {
    super({ text: 'Next' });
    this.node.onclick = (): void => this.emit(CustomEvents.clickNextGaragePage, {});
    this.on(CustomEvents.updateCarsAmout, this.setGarageState);
  }

  protected setGarageState = (): void => {
    const { garageCurrentPage, carsAmount } = this.store;
    this.setDisabledState({
      currentPage: garageCurrentPage,
      amount: carsAmount,
      limit: 5,
    });
  };

  protected setWinnersState = (): void => {
    const { winnersCurrentPage, winnersAmount } = this.store;
    this.setDisabledState({
      currentPage: winnersCurrentPage,
      amount: winnersAmount,
      limit: 10,
    });
  };

  private setDisabledState = ({ currentPage, amount, limit }: StateProps): void => {
    if (amount > limit && this.node.disabled) {
      this.node.disabled = false;
    }
    if (currentPage === Math.ceil(amount / limit)) {
      this.node.disabled = true;
    }
  };
}

export default NextBtn;
