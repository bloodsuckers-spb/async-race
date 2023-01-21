import { HashType } from '.';
import CustomEvents from '../enums/CustomEvents';
import RequestMethods from '../enums/RequestMethods';

export interface Car {
  name: string;
  color: HashType;
  id: number;
}

export type NewCar = {
  id: number;
  body: string;
};

export type GetCarsResponse = {
  data: Array<Car>;
};

export type QueryString = `http://${string}`;

export type RequestOptions = {
  headers?: {};
};

export type Load = {
  method: RequestMethods;
  queryString: QueryString;
  eventName: CustomEvents;
  options: Record<string, string>;
};
