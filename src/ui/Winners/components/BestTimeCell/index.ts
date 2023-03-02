import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import BestTimeDetails from '../BestTimeDetails';

const bestTimeCell = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['result-cell'],
  children: [BestTimeDetails]
});

export default bestTimeCell;
