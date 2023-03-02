import Component from '../../base/Component';

import CarHeading from '../../ui/CarHeading';

import Tags from '../../enums/Tags';

import { Car } from '../../models/API';

import ControlPanel from '../ControlPanel';

import styles from './index.css';

type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  carData: Car;
  handlers: {
    startDriving: () => void;
    stopDriving: () => void
  };
};

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
