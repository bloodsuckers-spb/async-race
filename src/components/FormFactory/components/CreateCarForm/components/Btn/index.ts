import Component from '../../../../../../base/Component';

import Tags from '../../../../../../enums/Tags';

const CreateCarBtn = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btn'],
  nodeProps: {
    textContent: 'Create car',
    disabled: 'true',
  },
});

export default CreateCarBtn;
