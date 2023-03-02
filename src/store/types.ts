/* eslint-disable import/order */
import RaceListItem from '../components/RaceListItem';

import { Winner } from 'models/API';

export type Store = {
  drawedCars: Map<RaceListItem['id'], RaceListItem>;
  drawedWinners: Map<`${Winner['id']}`, Winner>;
  carsAmount: number;
  winnersAmount: number;
  garageCurrentPage: number;
  winnersCurrentPage: number;
  set carsCount(count: number);
  get carsCount(): number;
  set winnersCount(count: number);
  get winnersCount(): number;
};
