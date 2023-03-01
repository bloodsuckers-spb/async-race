import { AppForms, PaginationBtns } from 'models';

export const errorMessage = 'Type of props is not valid';

export const SVGNamespaceURI = 'http://www.w3.org/2000/svg';
export const xLink = 'http://www.w3.org/1999/xlink';

export const resultsHeaderProps = ['№', 'Car', 'Name'] as const;

export const paginationBtn: PaginationBtns = {
  prev: 'prev',
  next: 'next',
} as const;

export const appForms: AppForms = {
  create: 'create',
  update: 'update',
} as const;

export const fetchMethods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const customEvents = {
  GetWinners: 'GetWinners',
} as const;
