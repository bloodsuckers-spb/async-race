import Form from '../../сomp/Form';
import List from '../../сomp/List';
import GarageView from '../../сomp/GarageView';

const GarageLayout = (garageView: GarageView) => {
  const createForm = new Form(garageView);
  const updateForm = new Form(garageView);
  const raceTrackList = new List(garageView);
  return { createForm, updateForm, raceTrackList };
};

export default GarageLayout;
