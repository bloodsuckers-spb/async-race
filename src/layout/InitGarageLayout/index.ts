/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from '../../сomp/Form';
import List from '../../сomp/List';
import GarageView from '../../сomp/GarageView';
import Heading from '../../сomp/Heading';
import Title from '../../сomp/Title';

import HeadingKeys from '../../enums/HeadingKeys';
import TitleKeys from '../../enums/TitleKeys';
import Views from '../../enums/Views';

const initGarageLayout = (garageView: GarageView) => {
  const createForm = new Form(garageView);
  const updateForm = new Form(garageView);
  const raceTrackList = new List(garageView);
  const heading = new Heading(garageView, Views.garage, HeadingKeys.garage);
  const title = new Title(garageView, TitleKeys.garage);
  return { createForm, updateForm, raceTrackList, heading, title };
};

export default initGarageLayout;
