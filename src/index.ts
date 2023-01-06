import Component from './base/Component';
import View from './Views/View';
import ErrorView from './Views/ErrorView';
import InitialView from './Views/InitialView';

import Routes from './enums/Routes';

import navLinks from './Components/NavLinks';

const garageComponent = new Component<HTMLDivElement>({
  tagName: 'div',
  classList: ['myTestComponent'],
});

const winnersComponent = new Component<HTMLDivElement>({
  tagName: 'div',
  classList: ['myTestComponent'],
});

const errorComponent = new Component<HTMLDivElement>({
  tagName: 'div',
  classList: ['myTestComponent'],
});

export const garageView = new InitialView(garageComponent, Routes.garage, navLinks);
export const errorView = new ErrorView(errorComponent, Routes.page404);
export const winnersView = new View(winnersComponent, Routes.winners);
