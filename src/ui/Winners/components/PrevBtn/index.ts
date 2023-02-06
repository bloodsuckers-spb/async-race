import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const winnersPrevBtn = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btn'],
  nodeProps: {
    textContent: 'Prev',
  },
});

export default winnersPrevBtn;
