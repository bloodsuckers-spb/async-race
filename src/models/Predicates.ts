import { AbstractResponse, Car, CountedDataResponse, Winner } from './API';

import { errorMessage } from '../constants';
import { totalCount } from '../constants/API';

export const isResponse = <T>(arg: T | AbstractResponse): arg is AbstractResponse => {
  if (typeof arg !== 'object' || arg === null) {
    return false;
  }

  if (!('data' in arg) || !('headers' in arg)) {
    return false;
  }

  return true;
};

export const isCountedDataResponse = <T>(arg: T | CountedDataResponse): arg is CountedDataResponse => {
  if (typeof arg !== 'object' || arg === null) {
    return false;
  }

  if (!('headers' in arg)) {
    return false;
  }

  if (typeof arg.headers !== 'object' || !(totalCount in arg.headers)) {
    return false;
  }

  return true;
};

export const isCar = <T>(data: T | Car): data is Car => {
  const keys = ['id', 'color', 'name'];
  if (typeof data !== 'object' || data === null) {
    throw new Error(errorMessage);
  }
  return keys.every((key) => key in data);
};

export const isCars = <T>(data: T | Array<Car>): data is Array<Car> => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every((item) => isCar(item));
};

export const isWinner = <T>(data: T | Winner): data is Winner => {
  const keys = ['wins', 'id', 'time'];
  if (typeof data !== 'object' || data === null) {
    throw new Error(errorMessage);
  }
  return keys.every((key) => key in data);
};

export const isWinners = <T>(data: T | Array<Winner>): data is Array<Winner> => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every((item) => isWinner(item));
};
