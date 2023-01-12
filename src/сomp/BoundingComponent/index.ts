import Component from '../../base/Component';
import styles from './index.css';

const { container } = styles;

class BoundingComponent extends Component<'div'> {
  constructor(child: Component<'div'>) {
    super({
      tagName: 'div',
      classList: [container],
    });
    this.node.append(child.node);
  }
}

export default BoundingComponent;
