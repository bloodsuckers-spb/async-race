import Component from '../../base/Component';
import Heading from '../../components/Heading';

import HeadingKeys from '../../enums/HeadingKeys';
import Views from '../../enums/Views';
import Tags from '../../enums/Tags';

const initWinnersLayout = (winnersView: Component<Tags.div>) => {
  const heading = new Heading(winnersView, Views.winners, HeadingKeys.winners);
  return { heading };
};

export default initWinnersLayout;
