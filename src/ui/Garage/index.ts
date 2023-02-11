import Component from '../../base/Component';

import createForm from '../../components/CarFormCreate';
import updateCardForm from '../../components/CarFormUpdate';
import raceTrackList from '../../components/RaceList';
import racePanel from '../../components/RacePanel';

import Tags from '../../enums/Tags';

import styles from './index.css';

const { garage } = styles;

const GarageView = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [garage],
});

const children = [createForm, updateCardForm, racePanel, raceTrackList];

GarageView.append(...children);

export default GarageView;
