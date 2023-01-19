import axios, { AxiosResponse } from 'axios';

import EventEmitter from '../EventEmitter';

import { ComponentProps } from '../../models';
import { Load } from '../../models/API';
import CustomEvents from '../../enums/CustomEvents';

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

  load = <U>({ method, queryString, eventName }: Load): void => {
    axios[method](queryString)
      .then((response: AxiosResponse<U>) => this.emit(CustomEvents[eventName], response))
      .catch((error: Error) => console.log(error.message));
  };
}

export default Component;
