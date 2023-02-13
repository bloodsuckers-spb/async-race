import Component from '../../../../base/Component';

import winsDetails from '../WinsDetails';

import Tags from '../../../../enums/Tags';

const winsCell = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['result-cell'],
  children: [winsDetails],
});

export default winsCell;
