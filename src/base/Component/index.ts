import { ComponentProps } from '../../models';

class Component {
  public readonly node: HTMLElement;
  constructor({ tagName = 'div', classList = [], nodeProps = {}, parent }: ComponentProps) {
    this.node = document.createElement(tagName);
    this.node.className = classList.join(' ');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  remove() {
    this.node.remove();
  }
}

export default Component;
