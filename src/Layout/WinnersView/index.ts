import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const WinnersView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['winners'],
});

export default WinnersView;
