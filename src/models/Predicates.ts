import { AbstractResponse, Car } from './API';
import { errorMessage } from '../constants';

export const isResponse = <T>(arg: T | AbstractResponse): arg is AbstractResponse => {
  if (typeof arg !== 'object' || arg === null) {
    return false;
  }

  if (!('data' in arg) || !('headers' in arg)) {
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
