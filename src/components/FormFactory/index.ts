import CarFormCreate, { CreateFormProps } from '../CarFormCreate';
import CarFormUpdate, { updateCarFormProps } from '../CarFormUpdate';

import { appForms } from '../../constants';

import { AppForms } from '../../models';

const formFactory = <T extends keyof AppForms>(type: AppForms[T]): CarFormCreate | CarFormUpdate => {
  if (type === appForms.create) {
    return new CarFormCreate(CreateFormProps);
  }
  return new CarFormUpdate(updateCarFormProps);
};

export const carFormCreate = formFactory('create');
export const carFormUpdate = formFactory('update');
