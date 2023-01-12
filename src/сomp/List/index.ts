import Component from '../../base/Component';

import styles from './index.css';

const { list } = styles;

class List extends Component<'ul'> {
  constructor(children: Array<Component<keyof HTMLElementTagNameMap>>) {
    super({
      tagName: 'ul',
      classList: [list],
    });
    this.node.append(...children.map((child) => child.node));
  }
}

export default List;
