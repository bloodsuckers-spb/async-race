import { Car, Winner } from '../../models/API';

export interface Props extends Winner, Car {
  index: number;
}
