import Component from '../../base/Component';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { container } = styles;

const mainBounding = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

export default mainBounding;
