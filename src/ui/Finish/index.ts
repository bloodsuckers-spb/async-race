import Component from '../../base/Component';

import Tags from '../../enums/Tags';

import styles from './index.css';

type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
};

class Finish extends Component<Tags.div> {
  constructor({ parent }: Props) {
    super({
      tagName: Tags.div,
      classList: [styles.finish],
      parent: parent.node,
    });
  }
}

export default Finish;
