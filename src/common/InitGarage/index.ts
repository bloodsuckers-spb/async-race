import Component from '../../base/Component';

import Form from '../../components/Form';
import RaceTracksList from '../../components/RaceTracksList';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import HeadingKeys from '../../enums/HeadingKeys';
import TitleKeys from '../../enums/TitleKeys';
import Views from '../../enums/Views';

import Tags from '../../enums/Tags';

const initGarageLayout = (garageView: Component<Tags.div>) => {
  const createForm = new Form(garageView);
  const updateForm = new Form(garageView);
  const heading = new Heading(garageView, Views.garage, HeadingKeys.garage);
  const title = new Title(garageView, TitleKeys.garage);
  const raceTrackList = new RaceTracksList(garageView);
  return { createForm, updateForm, raceTrackList, heading, title };
};

export default initGarageLayout;
