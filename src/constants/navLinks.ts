const nav = document.createElement('nav');
document.body.append(nav);

const navLinksProps = [
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
