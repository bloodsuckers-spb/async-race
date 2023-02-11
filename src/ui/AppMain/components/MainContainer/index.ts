import Component from '../../../../base/Component';

import RoutingRoot from '../RouterRoot';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { container } = styles;

const MainContainer = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

MainContainer.append(RoutingRoot);

export default MainContainer;
