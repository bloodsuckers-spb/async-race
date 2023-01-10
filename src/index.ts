/* eslint-disable import/no-named-as-default */
import Component from './base/Component';
import View from './Views/View';
import ErrorView from './Views/ErrorView';
import InitialView from './Views/InitialView';

import Routes from './enums/Routes';

import navLinks from './Components/NavLinks';

const garageComponent = new Component({
  tagName: 'div',
  classList: ['myGarageComponent'],
  nodeProps: {
    textContent: 'Garage',
  },
});

const winnersComponent = new Component({
  tagName: 'div',
  classList: ['myWinnersComponent'],
  nodeProps: {
    textContent: 'Winners',
  },
});

console.log(winnersComponent.node.textContent);

const errorComponent = new Component({
  tagName: 'div',
  classList: ['myTestComponent'],
  nodeProps: {
    textContent: '404',
  },
});

// const btn = new Component({
//   tagName: 'button',
//   classList: [''],
//   nodeProps: {
//     textContent: '0',
//   },
// });

// let val = 0;

// const loop = () => {
//   setTimeout(() => {
//     if (val > 50) {
//       console.log(btn.state);
//     }
//     val += 10;
//     btn.node.textContent = `${val}`;
//     btn.node.style.transform = `translateX(${val}px)`;
//     loop();
//   }, 1000);
// };

// loop();

// garageComponent.node.append(btn.node);
const root = document.createElement('main');
document.body.append(root);

export const garageView = new InitialView(garageComponent, Routes.garage, root, navLinks);
export const errorView = new ErrorView(errorComponent, Routes.page404);
export const winnersView = new View(winnersComponent, Routes.winners);
