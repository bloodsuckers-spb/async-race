import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';
import styles from './index.css';

const { cell } = styles;

class Cell extends Component<Tags.div> {
  constructor(text = 'hi') {
    super({
      tagName: Tags.div,
      classList: [cell],
      nodeProps: {
        textContent: text,
      },
    });
  }
}

export default Cell;
