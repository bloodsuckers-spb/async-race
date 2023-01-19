import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const contentComponent = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['content'],
});

export default contentComponent;
