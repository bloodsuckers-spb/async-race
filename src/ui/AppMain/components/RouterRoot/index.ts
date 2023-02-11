import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const RouterRoot = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [styles.root],
});

export default RouterRoot;
