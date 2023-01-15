import Component from '../../base/Component';
import CarHeading from '../CarHeading';
import ControlPanel from '../ControlPanel';

import Tags from '../../enums/Tags';

class RaceItemHeader extends Component<Tags.header> {
  heading: CarHeading;
  controlPanel: ControlPanel;
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, readonly title: string) {
    super({
      tagName: Tags.header,
      classList: ['race-track-header'],
      parent: parent.node,
    });
    this.heading = new CarHeading(this, title);
    this.controlPanel = new ControlPanel(this);
  }
}

export default RaceItemHeader;
