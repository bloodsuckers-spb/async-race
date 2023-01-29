import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';

const winnersNextBtn = new Component<Tags.button>({
  tagName: Tags.button,
  classList: ['btn'],
  nodeProps: {
    textContent: 'Next',
  },
});

export default winnersNextBtn;
