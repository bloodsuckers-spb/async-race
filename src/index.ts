/* eslint-disable implicit-arrow-linebreak */
console.log('hello world');

const createEl = (htmlString: string) =>
  document.createRange().createContextualFragment(htmlString).firstChild as ChildNode;

const div = createEl('<div><p>Some strange text...</p><button>HELLO WORLD</button></div>');
document.body.append(div);
