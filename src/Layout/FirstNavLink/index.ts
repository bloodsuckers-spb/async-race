import Component from '../../base/Component';
import firstListItem from '../List';

import Tags from '../../enums/Tags';
import Routes from '../../enums/Routes';

const firstNavLink = new Component<Tags.a>({
  tagName: Tags.a,
  classList: ['nav-link'],
  parent: firstListItem.node,
  nodeProps: { href: Routes.garage, textContent: 'Garage' },
});

export default firstNavLink;
