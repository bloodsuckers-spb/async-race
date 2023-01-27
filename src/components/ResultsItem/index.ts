import Component from '../../base/Component';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { winner } = styles;

class Winner extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.div,
      classList: [winner],
      parent: parent.node,
    });

    // this.node.append()
  }
}

export default Winner;
