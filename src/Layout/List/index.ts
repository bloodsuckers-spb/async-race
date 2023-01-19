import Component from '../../base/Component';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { list } = styles;

const listComponent = new Component<Tags.ul>({
  tagName: Tags.ul,
  classList: [list],
});

export default listComponent;
