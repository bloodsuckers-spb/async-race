import { ComponentProps } from '../models';

const nav = document.createElement('nav');
document.body.append(nav);

const navLinksProps: Array<ComponentProps<'a'>> = [
  {
    tagName: 'a',
    classList: ['nav-link'],
    nodeProps: {
      href: '/',
      textContent: 'Garage',
    },
    parent: nav,
  },
  {
    tagName: 'a',
    classList: ['nav-link'],
    nodeProps: {
      href: '/winners',
      textContent: 'Winners',
    },
    parent: nav,
  },
];

export default navLinksProps;
