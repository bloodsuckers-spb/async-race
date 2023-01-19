import Component from '../../base/Component';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { header } = styles;

const headerComponent = new Component<Tags.header>({
  tagName: Tags.header,
  classList: [header],
});

export default headerComponent;
