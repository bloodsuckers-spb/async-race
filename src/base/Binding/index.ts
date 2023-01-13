import Component from '../Component';
import State from '../State';

class Binding {
  constructor(public component: Component<keyof HTMLElementTagNameMap>, public state: State) {}
}

export default Binding;
