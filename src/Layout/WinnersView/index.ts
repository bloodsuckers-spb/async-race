import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const WinnersView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['winners'],
  nodeProps: {
    textContent: 'Winners',
  },
});

export default WinnersView;
