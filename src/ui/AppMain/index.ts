import Component from '../../base/Component';

import MainContainer from './components/MainContainer';

import Tags from '../../enums/Tags';

import styles from './index.css';

const AppMain = new Component<Tags.main>({
  tagName: Tags.main,
  classList: [styles.main],
});

AppMain.append(MainContainer);

export default AppMain;
