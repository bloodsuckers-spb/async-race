import Component from '../../base/Component';

class AppComponent extends Component<'div'> {
  static count = 0;
  constructor(children: Array<Component<keyof HTMLElementTagNameMap>>) {
    super({
      tagName: 'div',
      classList: ['app'],
      parent: document.body,
    });
    if (AppComponent.count > 0) return;
    AppComponent.count += 1;
    this.node.append(...children.map((child) => child.node));
  }
}

export default AppComponent;
