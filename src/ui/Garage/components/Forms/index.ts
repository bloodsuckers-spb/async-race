import Component from '../../../../base/Component';

import { carFormCreate, carFormUpdate } from '../../../../components/FormFactory';
import RacePanel from '../../../../components/RacePanel';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const forms = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [styles.forms],
  children: [RacePanel, carFormCreate, carFormUpdate],
});

export default forms;
