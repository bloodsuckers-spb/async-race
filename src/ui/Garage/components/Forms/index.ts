import Component from '../../../../base/Component';

import { carFormCreate, carFormUpdate } from '../../../../components/FormFactory';
import GenerateCars from '../../../../components/GenerateCars';
import RacePanel from '../../../../components/RacePanel';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const forms = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [styles.forms],
  children: [RacePanel, GenerateCars, carFormCreate, carFormUpdate],
});

export default forms;
