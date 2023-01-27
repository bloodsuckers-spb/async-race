import Component from '../../base/Component';
import HeaderList from '../HeaderList';

import Tags from '../../enums/Tags';

const HeaderNav = new Component<Tags.nav>({
  tagName: Tags.nav,
  classList: ['nav'],
});

HeaderNav.append(HeaderList);

export default HeaderNav;
