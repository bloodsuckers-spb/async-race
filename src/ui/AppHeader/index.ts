import Component from '../../base/Component';

import HeaderContainer from './components/HeaderContainer';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { header } = styles;

const AppHeader = new Component<Tags.header>({
  tagName: Tags.header,
  classList: [header],
  children: [HeaderContainer],
});

export default AppHeader;
