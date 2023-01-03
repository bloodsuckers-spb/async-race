/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
const createElement = (htmlString: string) =>
  document.createRange().createContextualFragment(htmlString).firstChild as ChildNode;

const createMarkup = (tag: string) => (className: string) => (innerText: string) =>
  `<${tag} class=${className}>${innerText}</${tag}}`;

const data = [
  {
    tag: 'div',
    classList: 'red',
    innerText: '<div class="box"><p>Hello world</p></div>',
  },
  {
    tag: 'button',
    classList: 'red',
    innerText: 'Привет всем',
  },
];

const elements = data.map(({ tag, classList, innerText }) => createElement(createMarkup(tag)(classList)(innerText)));

const fragment = document.createDocumentFragment();
fragment.append(...elements);

document.body.append(fragment);
