/* eslint-disable max-classes-per-file */
import { ComponentProps } from '../../models';

class Component<T extends HTMLElement = HTMLElement> {
  public readonly node: T;
  constructor({ tagName = 'div', classList = [], nodeProps = {}, parent }: ComponentProps) {
    this.node = document.createElement(tagName) as T;
    this.node.className = classList.join(' ');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  remove() {
    this.node.remove();
  }
}

export default Component;
