import Form from '../../сomp/Form';
import List from '../../сomp/List';
import GarageView from '../../сomp/GarageView';
import Heading from '../../сomp/Heading';

import HeadingKeys from '../../enums/HeadingKeys';
import Views from '../../enums/Views';

const initGarageLayout = (garageView: GarageView) => {
  const createForm = new Form(garageView);
  const updateForm = new Form(garageView);
  const raceTrackList = new List(garageView);
  const heading = new Heading(garageView, Views.garage, HeadingKeys.garage);
  return { createForm, updateForm, raceTrackList, heading };
};

export default initGarageLayout;
