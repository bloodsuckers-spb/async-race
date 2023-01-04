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

const garageView = new View(garageComponent, Routes.garage);
const winnersView = new View(winnersComponent, Routes.winners);
const errorView = new View(errorComponent, Routes.page404, true);
console.log(garageView);
console.log(winnersView);
console.log(errorView);
