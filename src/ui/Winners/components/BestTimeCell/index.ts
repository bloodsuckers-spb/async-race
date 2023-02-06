import Component from '../../../../base/Component';

import BestTimeDetails from '../BestTimeDetails';

import Tags from '../../../../enums/Tags';

const bestTimeCell = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['result-cell'],
});

bestTimeCell.append(BestTimeDetails);

export default bestTimeCell;
