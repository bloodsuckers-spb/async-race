import { AxiosHeaders } from 'axios';

import RaceListItem from '../RaceListItem';

import { Car } from '../../models/API';

export type Props = {
  data: Array<Car>;
  headers: AxiosHeaders;
};

export type Render = (car: Car) => RaceListItem;

export type Cache = (car: Car) => void;
