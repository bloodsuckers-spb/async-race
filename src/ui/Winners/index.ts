import Component from '../../base/Component';
import winnersHeading from './components/Heading';
import winnersTitle from './components/Title';
import results from './components/Results';

import Tags from '../../enums/Tags';

const WinnersView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['winners'],
});

const children = [winnersHeading, winnersTitle, results];

WinnersView.append(...children);

export default WinnersView;
