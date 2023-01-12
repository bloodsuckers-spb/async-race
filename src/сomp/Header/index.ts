import Component from '../../base/Component';

import styles from './index.css';

const { header } = styles;

class Header extends Component<'header'> {
  constructor(child: Component<'div'>) {
    super({
      tagName: 'header',
      classList: [header],
    });
    this.node.append(child.node);
  }
}

export default Header;
