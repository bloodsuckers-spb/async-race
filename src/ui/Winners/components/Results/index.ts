import Component from '../../../../base/Component';

import resultContent from '../../../../components/ResultsList';

import Tags from '../../../../enums/Tags';

import ResultsHeader from '../ResultsHeader';

const results = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['results'],
  children: [ResultsHeader, resultContent],
});

export default results;
