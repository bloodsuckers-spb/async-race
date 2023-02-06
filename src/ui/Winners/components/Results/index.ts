import Component from '../../../../base/Component';

import resultContent from '../../../../components/ResultsContent';

import ResultsHeader from '../ResultsHeader';

import Tags from '../../../../enums/Tags';

const results = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['results'],
});

const children = [ResultsHeader, resultContent];

results.append(...children);

export default results;
