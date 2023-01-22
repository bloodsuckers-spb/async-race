import { HashType } from '.';
import CustomEvents from '../enums/CustomEvents';
import RequestMethods from '../enums/RequestMethods';

// Abstract Headers
export type Headers = Record<string, string>;

// Headers for counted data
export type CountedDataHeaders = {
  'x-total-count': string;
};

// Abstract Response
export type AbstractResponse = {
  data: unknown;
  headers: Headers;
};

// Generic Response
export type LoadResponse<T, U> = {
  data: T;
  headers: U;
};

// Car Response
export type CarResponse = LoadResponse<Car, Headers>;

// Array of Cars Response
export type CarsResponse = LoadResponse<Array<Car>, CountedDataHeaders>;

// Car interface
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

// Request types
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
