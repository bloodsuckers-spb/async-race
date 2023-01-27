import Component from '../../base/Component';
import HeaderContent from '../HeaderContent';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { container } = styles;

const HeaderContainer = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

HeaderContainer.append(HeaderContent);

export default HeaderContainer;
