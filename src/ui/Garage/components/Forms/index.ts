import Component from '../../../../base/Component';

import CarFormCreate from '../../../../components/CarFormCreate';
import CarFormUpdate from '../../../../components/CarFormUpdate';
import RacePanel from '../../../../components/RacePanel';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const forms = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [styles.forms],
});

const children = [RacePanel, CarFormCreate, CarFormUpdate];

forms.append(...children);

export default forms;
