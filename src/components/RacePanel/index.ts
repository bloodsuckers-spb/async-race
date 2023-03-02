import Component from '../../base/Component';

import Btn from '../../ui/Button';

import { Store } from '../../decorators';

import { Btns, Tags } from '../../enums';

import { AbstractStore } from '../../models';

import styles from './index.css';

interface RacePanel extends AbstractStore {}

@Store()
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

    this.raceBtn.node.onclick = this.startRace;
    this.resetBtn.node.onclick = this.stopRace;
  }

  private startRace = async (): Promise<void> => {
    const racers = [...this.store.racers];
    const promises = await Promise.all(racers.map((racer) => racer.startEngine()));
    const started = racers.map((racer, i) => {
      racer.setDuration(promises[i]);
      return racer.startAnimation();
    });
    racers.forEach((racer) => {
      racer.getDriveStatus().then(({ success }) => {
        if (!success) {
          racer.stopAnimation();
        }
      });
    });
    const winner = await Promise.race(started);
    console.log(winner);
  };

  private stopRace = (): void => {
    const racers = [...this.store.racers];
    const stopped = racers.map((racer) => racer.stopEngine());
    Promise.allSettled(stopped).then(() =>
      racers.forEach((racer) => {
        racer.stopAnimation();
        racer.moveToOriginPosition();
      }));
  };
}

export default new RacePanel();
