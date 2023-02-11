import Component from '../../base/Component';

import CarHeading from '../../ui/CarHeading';

import ControlPanel from '../ControlPanel';

import Tags from '../../enums/Tags';

import { Car } from '../../models/API';

import styles from './index.css';

class RaceItemHeader extends Component<Tags.header> {
  public heading: CarHeading;
  public controlPanel: ControlPanel;
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: Tags.header,
      classList: [styles.header],
      parent: parent.node,
    });
    this.heading = new CarHeading(this, name);
    this.controlPanel = new ControlPanel(this, { name, color, id });
  }
}

export default RaceItemHeader;
