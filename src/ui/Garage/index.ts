import Component from '../../base/Component';
import createForm from '../../components/CarFormCreate';
import updateCardForm from '../../components/CarFormUpdate';
import garageHeading from './components/Heading';
import garageTitle from './components/Title';
import raceTrackList from '../../components/RaceTracksList';
import garageNav from './components/PaginationBox';
import racePanel from '../../components/RacePanel';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { garage } = styles;

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [garage],
});

const children = [createForm, updateCardForm, garageHeading, garageTitle, racePanel, raceTrackList, garageNav];

GarageView.append(...children);

export default GarageView;
