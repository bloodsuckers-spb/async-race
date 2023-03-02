import { AxiosHeaders } from 'axios';

import { Car } from '../../models/API';

import RaceListItem from '../RaceListItem';

export type Props = {
  data: Array<Car>;
  headers: AxiosHeaders;
};

export type Render = (car: Car) => RaceListItem;
