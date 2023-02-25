import Component from '../../base/Component';

import Btn from '../../ui/Button';

import Btns from '../../enums/Btns';
import Tags from '../../enums/Tags';

import styles from './index.css';

class RacePanel extends Component<Tags.div> {
  protected raceBtn: Btn;
  protected resetBtn: Btn;
  constructor() {
    super({
      tagName: Tags.div,
      classList: [styles.panel],
    });

    this.raceBtn = new Btn({
      parent: this,
      text: Btns.race,
      isDisabled: false,
    });
    this.resetBtn = new Btn({
      parent: this,
      text: Btns.reset,
      isDisabled: false,
    });
  }
}

const racePanel = new RacePanel();

export default racePanel;
