import Component from '../../base/Component';
import './index.css';

class ContentComponent extends Component<'div'> {
  constructor(children: Array<Component<keyof HTMLElementTagNameMap>>) {
    super({
      tagName: 'div',
      classList: ['header-content'],
    });
    this.node.append(...children.map((child) => child.node));
  }
}

export default ContentComponent;
