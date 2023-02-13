import Component from '../../../../base/Component';

import firstNavLink from '../FirstNavLink';

import Tags from '../../../../enums/Tags';

const fistlistItem = new Component<Tags.li>({
  tagName: Tags.li,
  classList: ['list-item'],
  children: [firstNavLink]
});

export default fistlistItem;
