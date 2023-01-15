import Component from '../../base/Component';

class Nav extends Component<'nav'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'nav',
      classList: ['nav'],
      parent: parent.node,
    });
  }
}

export default Nav;
