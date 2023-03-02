import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import winsDetails from '../WinsDetails';

const winsCell = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['result-cell'],
  children: [winsDetails],
});

export default winsCell;
