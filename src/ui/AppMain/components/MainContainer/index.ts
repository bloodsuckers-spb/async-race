import Component from '../../../../base/Component';

import AppPagination from '../../../../components/AppPagination';

import RoutingRoot from '../RouterRoot';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { container } = styles;

const MainContainer = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

MainContainer.append(AppPagination, RoutingRoot);

export default MainContainer;
