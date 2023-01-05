import Component from './base/Component';
import View from './base/View';
import Routes from './enums/Routes';

const garageComponent = new Component({
  tagName: 'div',
  classList: ['myTestComponent'],
});

const winnersComponent = new Component({
  tagName: 'div',
  classList: ['myTestComponent'],
});

const errorComponent = new Component({
  tagName: 'div',
  classList: ['myTestComponent'],
});

export const garageView = new View(garageComponent, Routes.garage);
export const winnersView = new View(winnersComponent, Routes.winners);
export const errorView = new View(errorComponent, Routes.page404, true);
