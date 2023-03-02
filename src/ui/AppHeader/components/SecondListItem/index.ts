import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import secondNavLink from '../SecondNavLink';

const secondListItem = new Component<Tags.li>({
  tagName: Tags.li,
  classList: ['list-item'],
  children: [secondNavLink]
});

export default secondListItem;
