import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const bestTimeList = new Component<Tags.ul>({
  tagName: Tags.ul,
  classList: ['list'],
});

export default bestTimeList;
