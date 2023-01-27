import Component from '../../base/Component';
import RoutingRoot from '../RouterRoot';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { container } = styles;

const MainContainer = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

MainContainer.append(RoutingRoot);

export default MainContainer;
