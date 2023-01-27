import Component from '../../base/Component';
import Tags from '../../enums/Tags';

class CarHeading extends Component<Tags.h2> {
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, title: string) {
    super({
      tagName: Tags.h2,
      classList: ['car-title'],
      nodeProps: {
        textContent: title,
      },
      parent: parent.node,
    });
  }
}

export default CarHeading;
