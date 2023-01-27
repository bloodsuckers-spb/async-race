import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';
import ResultsHeader from '../ResultsHeader';
import resultContent from '../../../../components/ResultsContent';

const results = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['results'],
});

const children = [ResultsHeader, resultContent];

results.append(...children);

export default results;
