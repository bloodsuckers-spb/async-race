import Component from '../../base/Component';

import Btn from '../../ui/Button';

import Btns from '../../enums/Btns';
import Tags from '../../enums/Tags';

class RacePanel extends Component<Tags.div> {
  private raceBtn: Btn;
  private resetBtn: Btn;
  private generateBtn: Btn;
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['race-panel'],
    });
    this.raceBtn = new Btn(this, Btns.race);
    this.resetBtn = new Btn(this, Btns.reset);
    this.generateBtn = new Btn(this, Btns.generateCars);
    this.resetBtn.node.disabled = true;
  }
}

const racePanel = new RacePanel();

export default racePanel;
