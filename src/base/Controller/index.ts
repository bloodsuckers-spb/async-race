import EventEmitter from '../EventEmitter';
import Component from '../Component';

class Controller extends EventEmitter {
  constructor(public element: Component) {
    super();
  }
}

export default Controller;
