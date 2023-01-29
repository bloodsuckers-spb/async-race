import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';
import bestTimeCell from '../BestTimeCell';
import winsCell from '../../WinsCell';

import { resultsHeaderProps } from '../../../../constants';

import styles from './index.css';

const { header } = styles;

class ResultsHeader extends Component<Tags.div> {
  constructor(children: Array<Component<Tags.div>>) {
    super({
      tagName: Tags.div,
      classList: [header],
    });
    this.append(...children);
  }
}

const children = resultsHeaderProps.map(
  (text) =>
    new Component<Tags.div>({
      tagName: Tags.div,
      classList: ['result-cell'],
      nodeProps: {
        textContent: text,
      },
    }),
);

children.push(winsCell, bestTimeCell);

const resultsHeader = new ResultsHeader(children);

export default resultsHeader;
