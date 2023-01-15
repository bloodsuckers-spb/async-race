import { HashType } from '.';

export interface Car {
  name: string;
  color: HashType;
  id: number;
}

export type GetCarsResponse = {
  data: Array<Car>;
};
