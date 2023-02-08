import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { cell } = styles;

class TableCell extends Component<Tags.div> {
  constructor(text: string) {
    super({
      tagName: Tags.div,
      classList: [cell],
      nodeProps: {
        textContent: text,
      },
    });
  }
}

export default TableCell;
