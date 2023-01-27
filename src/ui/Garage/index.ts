import Component from '../../base/Component';
import createForm from '../../components/CreateCarForm';
import updateCardForm from '../../components/UpdateCarForm';
import garageHeading from './Heading';
import garageTitle from './Title';
import raceTrackList from '../../components/RaceTracksList';

import Tags from '../../enums/Tags';

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['garage'],
});

const children = [createForm, updateCardForm, garageHeading, garageTitle, raceTrackList];

GarageView.append(...children);

export default GarageView;
