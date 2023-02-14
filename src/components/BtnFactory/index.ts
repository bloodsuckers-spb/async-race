import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';

import { paginationBtn } from '../../constants';

import { PaginationBtns } from '../../models';

const BtnFactory = <T extends keyof PaginationBtns>(type: PaginationBtns[T]): PrevBtn | NextBtn => {
  if (type === paginationBtn.next) {
    return new NextBtn();
  }
  return new PrevBtn();
};

export const nextBtn = BtnFactory('next');
export const prevBtn = BtnFactory('prev');
