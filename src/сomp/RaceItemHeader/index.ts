import Component from '../../base/Component';
import CarHeading from '../CarHeading';
import ControlPanel from '../ControlPanel';

class RaceItemHeader extends Component<'header'> {
  heading: CarHeading;
  controlPanel: ControlPanel;
  constructor(readonly parent: Component<keyof HTMLElementTagNameMap>, readonly title: string) {
    super({
      tagName: 'header',
      classList: ['race-track-header'],
      parent: parent.node,
    });
    this.heading = new CarHeading(this, title);
    this.controlPanel = new ControlPanel(this);
  }
}

export default RaceItemHeader;
