import Component from '../../base/Component';
import styles from './index.css';

const { container } = styles;

class BoundingComponent extends Component<'div'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'div',
      classList: [container],
      parent: parent.node,
    });
  }
}

export default BoundingComponent;
