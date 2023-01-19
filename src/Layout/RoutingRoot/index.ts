import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const routingRoot = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['root-routing'],
});

export default routingRoot;
