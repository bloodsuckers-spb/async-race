import Component from '../../base/Component';

import styles from './index.css';

const { header } = styles;

class Header extends Component<'header'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'header',
      classList: [header],
      parent: parent.node,
    });
  }
}

export default Header;
