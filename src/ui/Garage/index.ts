import Component from '../../base/Component';
import createForm from '../../components/CarFormCreate';
import updateCardForm from '../../components/CarFormUpdate';
import garageHeading from './components/Heading';
import garageTitle from './components/Title';
import raceTrackList from '../../components/RaceTracksList';
import garageNav from './components/PaginationBox';

import Tags from '../../enums/Tags';

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['garage'],
});

const children = [createForm, updateCardForm, garageHeading, garageTitle, raceTrackList, garageNav];

GarageView.append(...children);

export default GarageView;
