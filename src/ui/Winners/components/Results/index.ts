import Component from '../../../../base/Component';

import resultContent from '../../../../components/ResultsList';

import ResultsHeader from '../ResultsHeader';

import Tags from '../../../../enums/Tags';

const results = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['results'],
  children: [ResultsHeader, resultContent],
});

export default results;
