import Component from '../../base/Component';
import HeaderContainer from '../HeaderContainer';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { header } = styles;

const AppHeader = new Component<Tags.header>({
  tagName: Tags.header,
  classList: [header],
});

AppHeader.append(HeaderContainer);

export default AppHeader;
