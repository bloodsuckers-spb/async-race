/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import Component from '../../base/Component';

import Track from '../../ui/Track';

import { AsyncFetch, Store } from '../../decorators';
import { AbstractFetch } from '../../decorators/Fetch';
import RaceItemHeader from '../RaceItemHeader';

import { errorMessage } from '../../constants';

import { CustomEvents, Tags } from '../../enums';

import { AbstractStore, Car, HashType } from '../../models';
import { isCar, isResponse } from '../../models/predicates';

import styles from './index.css';

type Animation = {
  id: number;
  time: number;
};

interface RaceListItem extends AbstractStore, AbstractFetch {
  header: RaceItemHeader;
  track: Track;
  name: string;
  color: HashType;
  animationId: number;
  finalPostion: number;
}

type StartEngine = {
  velocity: number;
  distance: number;
};

type DriverStatus = {
  success: boolean;
};

@Store()
@AsyncFetch()
class RaceListItem extends Component<Tags.li> {
  private static readonly ENGINE_URL = 'http://127.0.0.1:3000/engine';
  private static readonly ENGINE_STATE = {
    Drive: 'drive',
    Started: 'started',
    Stopped: 'stopped',
  };
  protected readonly id: number;
  protected currentPosition = 0;
  protected time = 10;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, carData: Car) {
    super({
      tagName: Tags.li,
      classList: [styles.racetrack],
      parent: parent.node,
    });

    const { name, color, id } = carData;

    this.header = new RaceItemHeader({
      parent: this,
      carData,
      handlers: {
        startDriving: this.startDriving,
        stopDriving: this.stopDriving,
      },
    });

    this.track = new Track({
      parent: this,
      carColor: color,
    });

    this.name = name;
    this.color = color;
    this.id = id;

    this.on(CustomEvents.updateCar, this.onUpdate);
    this.on(CustomEvents.removeCar, this.onRemove);
  }

  private onUpdate = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }

    const { controlPanel } = this.header;
    const { id, name, color } = arg.data;

    if (id !== this.id) return;

    if (this.name !== name) {
      const { heading } = this.header;
      this.name = name;
      heading.node.textContent = name;
    }

    if (this.color !== color) {
      const { carSvg } = this.track;
      this.color = color;
      carSvg.node.style.fill = `${color}`;
    }

    if (controlPanel.name !== name) {
      controlPanel.name = name;
    }

    if (controlPanel.color !== color) {
      controlPanel.color = color;
    }
  };

  public onRemove = <T>(id: T): void => {
    const { drawedCars } = this.store;
    if (typeof id !== 'number') {
      throw new Error(errorMessage);
    }
    if (id === this.id) {
      this.off(CustomEvents.updateCar, this.onUpdate);
      this.off(CustomEvents.removeCar, this.onRemove);
      drawedCars.delete(`${this.id}`);
      this.destroy();
    }
  };

  private startDriving = (): void => {
    this.startEngine().then((response) => {
      this.setDuration(response);
      this.startAnimation();
      this.getDriveStatus().then(({ success }) => {
        if (!success) {
          this.stopAnimation();
        }
      });
    });
  };

  private stopDriving = (): void => {
    this.stopEngine().then(() => {
      this.stopAnimation();
      this.moveToOriginPosition();
    });
  };

  private getDriveStatus = async (): Promise<DriverStatus> => {
    const { ENGINE_URL, ENGINE_STATE } = RaceListItem;
    const response = await fetch(`${ENGINE_URL}?id=${this.id}&status=${ENGINE_STATE.Drive}`, {
      method: 'PATCH',
    });
    return {
      success: response.status === 200,
    };
  };

  private startEngine = (): Promise<StartEngine> => {
    const { ENGINE_URL, ENGINE_STATE } = RaceListItem;
    return this.awaitedFetch<StartEngine>({
      method: 'PATCH',
      queryString: `${ENGINE_URL}?id=${this.id}&status=${ENGINE_STATE.Started}`,
    });
  };

  private stopEngine = (): Promise<void> => {
    const { ENGINE_URL, ENGINE_STATE } = RaceListItem;
    return this.awaitedFetch({
      method: 'PATCH',
      queryString: `${ENGINE_URL}?id=${this.id}&status=${ENGINE_STATE.Stopped}`,
    });
  };

  private setDuration = ({ distance, velocity }: StartEngine): void => {
    this.time = Math.round(distance / velocity);
  };

  private startAnimation = async (): Promise<Animation> => {
    return new Promise((response) => {
      const finalPostion = this.track.finish.node.offsetLeft;
      const dx = 5;
      const animate = (): void => {
        this.currentPosition += dx;
        this.track.carSvg.node.style.transform = `translateX(${this.currentPosition}px)`;
        if (this.currentPosition < finalPostion) {
          this.animationId = requestAnimationFrame(animate);
        } else {
          response({ id: this.id, time: this.time });
        }
      };
      animate();
    });
  };

  private stopAnimation = (): void => {
    cancelAnimationFrame(this.animationId);
  };

  private moveToOriginPosition = (): void => {
    const { node } = this.track.carSvg;
    this.currentPosition = 0;
    node.style.transform = 'translateX(0px)';
  };
}

export default RaceListItem;
