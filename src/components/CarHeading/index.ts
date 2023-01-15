import Component from '../../base/Component';

class CarHeading extends Component<'h2'> {
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, title: string) {
    super({
      tagName: 'h2',
      classList: ['car-title'],
      nodeProps: {
        textContent: title,
      },
      parent: parent.node,
    });
  }
}

export default CarHeading;
