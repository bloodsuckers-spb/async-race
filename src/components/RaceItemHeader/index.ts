import Component from '../../base/Component';
import CarHeading from '../CarHeading';
import ControlPanel from '../ControlPanel';

import Tags from '../../enums/Tags';
import { Car } from '../../models/API';

class RaceItemHeader extends Component<Tags.header> {
  heading: CarHeading;
  controlPanel: ControlPanel;
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: Tags.header,
      classList: ['race-track-header'],
      parent: parent.node,
    });
    this.heading = new CarHeading(this, name);
    this.controlPanel = new ControlPanel(this, { name, color, id });
  }
}

export default RaceItemHeader;
