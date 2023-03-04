/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-syntax */
import Component from '../../base/Component';

import RaceListItem from '../RaceListItem';

import Btn from '../../ui/Button';

import { Store } from '../../decorators';

import { Btns, Tags, CustomEvents } from '../../enums';

import { AbstractStore } from '../../models';

import styles from './index.css';

type Props = {
  raceBtn: Btn;
  resetBtn: Btn;
};

interface RacePanel extends AbstractStore, Props {}

@Store()
class RacePanel extends Component<Tags.div> {
  constructor({ raceBtn, resetBtn }: Props) {
    super({
      tagName: Tags.div,
      classList: [styles.panel],
    });

    Object.assign(this, { raceBtn, resetBtn });
    this.append(raceBtn, resetBtn);

    this.raceBtn.node.onclick = (): void => {
      this.changeBtnsState();
      this.emit(CustomEvents.StartRace, {});
      this.startRace();
    };

    this.resetBtn.node.onclick = (): void => {
      this.changeBtnsState();
      this.emit(CustomEvents.ResetRace, {});
      this.stopRace();
    };

    this.on(CustomEvents.StartCarDriving, this.changeStartBtnState);
    this.on(CustomEvents.ResetCarDriving, this.changeStartBtnState);
  }

  private changeBtnsState = (): void => {
    [this.raceBtn, this.resetBtn].forEach(({ node }) => {
      node.disabled = !node.disabled;
    });
  };

  private changeStartBtnState = (): void => {
    const { node } = this.raceBtn;
    node.disabled = !node.disabled;
  };

  private startRace = async (): Promise<void> => {
    const racers: Array<RaceListItem> = [];
    this.store.drawedCars.forEach((racer) => racers.push(racer));
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
    const racers: Array<RaceListItem> = [];
    this.store.drawedCars.forEach((racer) => racers.push(racer));
    const stopped = racers.map((racer) => racer.stopEngine());
    Promise.allSettled(stopped).then(() =>
      racers.forEach((racer) => {
        racer.stopAnimation();
        racer.moveToOriginPosition();
      })
    );
  };
}

export default new RacePanel({
  raceBtn: new Btn({
    text: Btns.race,
    isDisabled: false,
  }),
  resetBtn: new Btn({
    text: Btns.reset,
    isDisabled: true,
  }),
});
