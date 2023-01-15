import Component from '../../base/Component';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { container } = styles;

class BoundingComponent extends Component<Tags.div> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.div,
      classList: [container],
      parent: parent.node,
    });
  }
}

export default BoundingComponent;
