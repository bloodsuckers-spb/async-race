import Component from '../../base/Component';

import styles from './index.css';

import Tags from '../../enums/Tags';

const { container } = styles;

const boundingComponent = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [container],
});

console.log(boundingComponent);

export default boundingComponent;
