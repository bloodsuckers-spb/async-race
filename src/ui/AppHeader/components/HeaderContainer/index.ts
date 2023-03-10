import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import HeaderContent from '../HeaderContent';

import styles from './index.css';

const { container } = styles;

const HeaderContainer = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
  children: [HeaderContent],
});

export default HeaderContainer;
