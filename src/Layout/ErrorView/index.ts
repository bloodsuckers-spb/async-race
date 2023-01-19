import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const ErrorView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['error'],
  nodeProps: {
    textContent: '404',
  },
});

export default ErrorView;
