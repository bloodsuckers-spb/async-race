import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['garage'],
});

export default GarageView;
