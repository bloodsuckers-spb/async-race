import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';

import { paginationBtn } from '../../constants';

class BtnFactory {
  // eslint-disable-next-line class-methods-use-this
  public create(type: keyof typeof paginationBtn): NextBtn | PrevBtn {
    if (type === paginationBtn.next) {
      return new NextBtn();
    }
    return new PrevBtn();
  }
}

const AbstractBtn = new BtnFactory();

export const nextBtn = AbstractBtn.create('next');
export const prevBtn = AbstractBtn.create('prev');
