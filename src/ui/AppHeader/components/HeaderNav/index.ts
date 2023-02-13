import Component from '../../../../base/Component';

import HeaderList from '../HeaderList';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const HeaderNav = new Component<Tags.nav>({
  tagName: Tags.nav,
  classList: [styles.nav],
  children: [HeaderList]
});

export default HeaderNav;
