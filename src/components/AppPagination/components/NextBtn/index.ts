import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const Next = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btns'],
  nodeProps: {
    textContent: 'Next',
    disabled: 'true',
  },
});

export default Next;
