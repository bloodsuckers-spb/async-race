import Component from '../../base/Component';

import raceTrackList from '../../components/RaceList';
import forms from './components/Forms';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { garage } = styles;

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [garage],
});

GarageView.append(forms);
GarageView.append(raceTrackList);

export default GarageView;
