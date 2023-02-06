// Components
// Types
import { ComponentProps } from '../../models';
import EventEmitter from '../EventEmitter';

class Component<T extends keyof HTMLElementTagNameMap> extends EventEmitter {
  public readonly node: HTMLElementTagNameMap[T];
  constructor({ tagName, classList = [], nodeProps = {}, parent }: ComponentProps<T>) {
    super();
    this.node = document.createElement(tagName);
    this.node.className = classList.join(' ');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  append = <U extends keyof HTMLElementTagNameMap>(...children: Array<Component<U>>) => {
    this.node.append(...children.map((component) => component.node));
  };
}

export default Component;
