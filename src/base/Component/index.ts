import EventEmitter from '../EventEmitter';

import { ComponentProps } from '../../models';

class Component<T extends keyof HTMLElementTagNameMap> extends EventEmitter {
  public readonly node: HTMLElementTagNameMap[T];
  constructor({ tagName, classList = [], nodeProps = {}, parent }: ComponentProps<T>) {
    super();
    this.node = document.createElement(tagName);
    this.node.className = classList.join(' ');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  public append = <U extends keyof HTMLElementTagNameMap>(...children: Array<Component<U>>): void => {
    this.node.append(...children.map((component) => component.node));
  };

  protected destroy = (): void => {
    this.node.remove();
  };
}

export default Component;
