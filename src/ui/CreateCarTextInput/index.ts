import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const CreateCarTextInput = new Component<Tags.input>({
  tagName: Tags.input,
  classList: ['text-input'],
});

export default CreateCarTextInput;
