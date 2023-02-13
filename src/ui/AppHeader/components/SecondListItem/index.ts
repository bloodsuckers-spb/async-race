import Component from '../../../../base/Component';

import secondNavLink from '../SecondNavLink';

import Tags from '../../../../enums/Tags';

const secondListItem = new Component<Tags.li>({
  tagName: Tags.li,
  classList: ['list-item'],
  children: [secondNavLink]
});

export default secondListItem;
