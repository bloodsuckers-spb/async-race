import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import firstNavLink from '../FirstNavLink';

const fistlistItem = new Component<Tags.li>({
  tagName: Tags.li,
  classList: ['list-item'],
  children: [firstNavLink]
});

export default fistlistItem;
