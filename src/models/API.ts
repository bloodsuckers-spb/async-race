/* eslint-disable import/order */
import { CustomEvents, RequestMethods } from 'enums';

import { HashType } from '.';

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

export type CountedDataResponse = {
  data: unknown;
  headers: CountedDataHeaders;
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

export type NewCar = Omit<Car, 'id'>;

export interface Winner {
  wins: number;
  id: number;
  time: number;
}

export type GetCarsResponse = {
  data: Array<Car>;
};

// Request types
export type QueryString = `http://${string}`;

export type RequestOptions = {
  headers?: {};
};

export interface Loading {
  method: RequestMethods;
  queryString: QueryString;
  eventName: CustomEvents;
  options: Record<string, string>;
}

export interface LoadDecorator extends Loading {
  cb: (...args: Array<unknown>) => void;
}
