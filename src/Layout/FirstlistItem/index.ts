import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const fistlistItem = new Component<Tags.li>({
  tagName: Tags.li,
  classList: ['list-item'],
});

export default fistlistItem;