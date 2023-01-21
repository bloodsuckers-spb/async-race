/* eslint-disable import/prefer-default-export */
import { Car } from '../../models/API';

import { errorMessage } from '../../constants';

export const isCar = <T>(data: T | Car): data is Car => {
  const keys = ['id', 'color', 'name'];
  if (typeof data !== 'object' || data === null) {
    throw new Error(errorMessage);
  }
  return keys.every((key) => key in data);
};
