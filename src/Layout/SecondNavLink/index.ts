import Component from '../../base/Component';
import secondListItem from '../SecondListItem';

import Tags from '../../enums/Tags';
import Routes from '../../enums/Routes';

const secondNavLink = new Component<Tags.a>({
  tagName: Tags.a,
  classList: ['nav-link'],
  parent: secondListItem.node,
  nodeProps: { href: Routes.winners, textContent: 'Winners' },
});

export default secondNavLink;
