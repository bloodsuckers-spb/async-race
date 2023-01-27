import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';

const ResultsHeader = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['result-header'],
  nodeProps: {
    textContent: 'result-header',
  },
});

export default ResultsHeader;
