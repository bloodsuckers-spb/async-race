import Component from '../../base/Component';

import Tags from '../../enums/Tags';

import styles from './index.css';

class CarHeading extends Component<Tags.h2> {
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, title: string) {
    super({
      tagName: Tags.h2,
      classList: [styles.title],
      nodeProps: {
        textContent: title,
      },
      parent: parent.node,
    });
  }
}

export default CarHeading;
