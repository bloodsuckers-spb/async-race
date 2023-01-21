import Component from '../../base/Component';

import CreateCarForm from '../../components/CreateCarForm';
import UpdateCarForm from '../../components/UpdateCarForm';

import CreateCarTextInput from '../../Layout/CreateCarTextInput';
import CreateCarBtn from '../../Layout/CreateCarBtn';
import CreateCarColorInput from '../../Layout/CreateCarColorInput';

import UpdateCarTextInput from '../../Layout/UpdateCarTextInput';
import UpdateCarColorInput from '../../Layout/UpdateCarColorInput';
import UpdateCarBtn from '../../Layout/UpdateCarBtn';

import RaceTracksList from '../../components/RaceTracksList';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import HeadingKeys from '../../enums/HeadingKeys';
import TitleKeys from '../../enums/TitleKeys';
import Views from '../../enums/Views';
import Tags from '../../enums/Tags';

const initGarageLayout = (view: Component<Tags.div>) => {
  const createForm = new CreateCarForm({ textInput: CreateCarTextInput, colorInput: CreateCarColorInput, btn: CreateCarBtn });
  const updateForm = new UpdateCarForm({ textInput: UpdateCarTextInput, colorInput: UpdateCarColorInput, btn: UpdateCarBtn });
  view.append(createForm, updateForm);
  const heading = new Heading(view, Views.garage, HeadingKeys.garage);
  const title = new Title(view, TitleKeys.garage);
  const raceTrackList = new RaceTracksList(view);
  return { createForm, updateForm, raceTrackList, heading, title };
};

export default initGarageLayout;
