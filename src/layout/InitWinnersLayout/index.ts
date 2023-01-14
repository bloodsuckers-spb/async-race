import WinnersView from '../../сomp/WinnersView';
import Heading from '../../сomp/Heading';

import HeadingKeys from '../../enums/HeadingKeys';
import Views from '../../enums/Views';

const initWinnersLayout = (winnersView: WinnersView) => {
  const heading = new Heading(winnersView, Views.winners, HeadingKeys.winners);
  return { heading };
};

export default initWinnersLayout;
