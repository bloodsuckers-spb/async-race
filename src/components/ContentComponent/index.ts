import Component from '../../base/Component';
import './index.css';

class ContentComponent extends Component<'div'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'div',
      classList: ['content'],
      parent: parent.node,
    });
  }
}

export default ContentComponent;
