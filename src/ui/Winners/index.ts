import Component from '../../base/Component';

import winnersHeading from './components/Heading';
import winnersPaginationBox from './components/PaginationBox';
import results from './components/Results';
import winnersTitle from './components/Title';

import Tags from '../../enums/Tags';

const WinnersView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['winners'],
});

const children = [winnersHeading, winnersTitle, results, winnersPaginationBox];

WinnersView.append(...children);

export default WinnersView;
