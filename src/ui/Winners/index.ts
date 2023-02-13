import Component from '../../base/Component';

import results from './components/Results';

import Tags from '../../enums/Tags';

const WinnersView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['winners'],
  children: [results],
});

export default WinnersView;
