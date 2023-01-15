import Component from '../../base/Component';

class Main extends Component<'main'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'main',
      classList: ['main'],
      parent: parent.node,
    });
  }
}

export default Main;
