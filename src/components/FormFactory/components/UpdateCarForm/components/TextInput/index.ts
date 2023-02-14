import Component from '../../../../../../base/Component';

import Tags from '../../../../../../enums/Tags';

const UpdateCarTextInput = new Component<Tags.input>({
  tagName: Tags.input,
  classList: ['text-input'],
  nodeProps: {
    readOnly: 'true',
  },
});

export default UpdateCarTextInput;
