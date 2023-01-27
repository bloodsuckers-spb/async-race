import Component from '../../base/Component';
import MainContainer from '../MainContainer';

import Tags from '../../enums/Tags';

const AppMain = new Component<Tags.main>({
  tagName: Tags.main,
  classList: ['main'],
});

AppMain.append(MainContainer);

export default AppMain;
