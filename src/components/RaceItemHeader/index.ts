/* eslint-disable simple-import-sort/imports */
import Component from '../../base/Component';

import ControlPanel from '../ControlPanel';

import CarHeading from '../../ui/CarHeading';

import Tags from '../../enums/Tags';

import { Props } from './types';

import styles from './index.css';

class RaceItemHeader extends Component<Tags.header> {
  public heading: CarHeading;
  public controlPanel: ControlPanel;
  constructor({ parent, carData, handlers }: Props) {
    super({
      tagName: Tags.header,
      classList: [styles.header],
      parent: parent.node,
    });
    this.heading = new CarHeading(this, carData.name);
    this.controlPanel = new ControlPanel({ parent: this, carData, handlers });
  }
}

export default RaceItemHeader;
