import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const UpdateCarBtn = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btn'],
  nodeProps: {
    textContent: 'Update car',
    disabled: 'true',
  },
});

export default UpdateCarBtn;
