import Component from '../../base/Component';

import Tags from '../../enums/Tags';

import styles from './index.css';

class Track extends Component<Tags.div> {
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.div,
      classList: [styles.track],
      parent: parent.node,
    });
  }
}

export default Track;
