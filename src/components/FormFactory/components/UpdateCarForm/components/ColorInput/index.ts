import Component from '../../../../../../base/Component';

import Tags from '../../../../../../enums/Tags';

const UpdateCarColorInput = new Component<Tags.input>({
  tagName: Tags.input,
  classList: ['text-input'],
  nodeProps: {
    type: 'color',
  },
});

export default UpdateCarColorInput;
