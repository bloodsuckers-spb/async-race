import Component from '../../base/Component';

import Form from '../../components/Form';

import CreateCarTextInput from '../../Layout/CreateCarTextInput';
import CreateCarBtn from '../../Layout/CreateCarBtn';
import CreateCarColorInput from '../../Layout/CreateCarColorInput';

import RaceTracksList from '../../components/RaceTracksList';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import HeadingKeys from '../../enums/HeadingKeys';
import TitleKeys from '../../enums/TitleKeys';
import Views from '../../enums/Views';
import Tags from '../../enums/Tags';

const initGarageLayout = (view: Component<Tags.div>) => {
  const createForm = new Form({ textInput: CreateCarTextInput, colorInput: CreateCarColorInput, btn: CreateCarBtn });
  view.append(createForm);
  // const updateForm = new Form(view);
  const heading = new Heading(view, Views.garage, HeadingKeys.garage);
  const title = new Title(view, TitleKeys.garage);
  const raceTrackList = new RaceTracksList(view);
  return { createForm, /* updateForm */ raceTrackList, heading, title };
};

export default initGarageLayout;
