import Component from '../../base/Component';

import CarHeading from '../../ui/CarHeading';

import ControlPanel from '../ControlPanel';

import Tags from '../../enums/Tags';

import { Car } from '../../models/API';

import styles from './index.css';

type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  carData: Car;
  handlers: {
    startAnimation: () => void;
    stopAnimation: () => void
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
