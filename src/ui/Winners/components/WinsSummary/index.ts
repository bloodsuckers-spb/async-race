import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

const winsSummary = new Component<Tags.summary>({
  tagName: Tags.summary,
  classList: ['summary'],
  nodeProps: {
    textContent: 'Wins',
  },
});

export default winsSummary;
