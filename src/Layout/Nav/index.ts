import Component from '../../base/Component';
import contentComponent from '../ContentComponent';

import Tags from '../../enums/Tags';

const nav = new Component<Tags.nav>({
  tagName: Tags.nav,
  classList: ['nav'],
  parent: contentComponent.node,
});

export default nav;
