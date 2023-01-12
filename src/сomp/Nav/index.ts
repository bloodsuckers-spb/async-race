import Component from '../../base/Component';

class Nav extends Component<'nav'> {
  constructor(children: Array<Component<keyof HTMLElementTagNameMap>>) {
    super({
      tagName: 'nav',
      classList: ['nav'],
    });
    this.node.append(...children.map((child) => child.node));
  }
}

export default Nav;
