import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';

const bestTimeSummary = new Component<Tags.summary>({
  tagName: Tags.summary,
  classList: ['summary'],
  nodeProps: {
    textContent: 'Best Time',
  },
});

export default bestTimeSummary;
