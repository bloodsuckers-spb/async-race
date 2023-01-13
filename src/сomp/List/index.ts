import Component from '../../base/Component';

import styles from './index.css';

const { list } = styles;

class List extends Component<'ul'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'ul',
      classList: [list],
      parent: parent.node,
    });
  }
}

export default List;
