import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const prev = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btn'],
  nodeProps: {
    textContent: 'Prev',
    disabled: 'true',
  },
});

export default prev;
