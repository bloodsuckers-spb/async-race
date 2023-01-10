import EventEmitter from '../EventEmitter';
import Component from '../Component';

class Controller<T extends keyof HTMLElementTagNameMap> extends EventEmitter {
  constructor(public element: Component<T>) {
    super();
  }
}

export default Controller;
