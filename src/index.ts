import Component from './base/Component';
import View from './base/View';
import Routes from './enums/Routes';

const garageView = new Component({
  tagName: 'div',
  classList: ['myTestComponent'],
});

const view1 = new View(garageView, Routes.garage);
console.log(view1);
