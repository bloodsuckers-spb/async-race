/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
export const createElement = (htmlString: string) => {
  const fragment = document.createRange().createContextualFragment(htmlString);
  const [firstChild] = fragment.children;
  return firstChild;
};

export const createMarkup = (tag: string) => (className: string, id: string) => (innerText: string) =>
  `<${tag} class=${className} id=${id}>${innerText}</${tag}}`;
