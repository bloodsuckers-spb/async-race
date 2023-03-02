/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import Component from '../../base/Component';

import Track from '../../ui/Track';

import { AsyncFetch, Store } from '../../decorators';
import RaceItemHeader from '../RaceItemHeader';

import { Animation, DriverStatus, StartEngine } from './types';

import { CustomEvents, Tags } from '../../enums';

import { AbstractFetch, AbstractStore, Car, HashType } from '../../models';
import { isCar, isResponse } from '../../models/predicates';

import styles from './index.css';

interface RaceListItem extends AbstractStore, AbstractFetch {
  header: RaceItemHeader;
  track: Track;
  name: string;
  color: HashType;
  animationId: number;
  finalPostion: number;
}

@Store()
@AsyncFetch()
class RaceListItem extends Component<Tags.li> {
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
    this.store.drawedCars.set(this.id, this);
  }

  private onUpdate = <T>(arg: T): void => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error('Type of props is not valid');
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
      throw new Error('Type of props is not valid');
    }
    if (id === this.id) {
      this.off(CustomEvents.updateCar, this.onUpdate);
      this.off(CustomEvents.removeCar, this.onRemove);
      drawedCars.delete(this.id);
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

  public getDriveStatus = async (): Promise<DriverStatus> => {
    const { ENGINE_STATE } = RaceListItem;
    const { ENGINE_URL, id } = this;
    const response = await fetch(`${ENGINE_URL}?id=${id}&status=${ENGINE_STATE.Drive}`, {
      method: 'PATCH',
    });
    return {
      success: response.status === 200,
    };
  };

  public startEngine = (): Promise<StartEngine> => {
    const { ENGINE_STATE } = RaceListItem;
    const { ENGINE_URL, id } = this;
    return this.awaitedFetch<StartEngine>({
      method: 'PATCH',
      queryString: `${ENGINE_URL}?id=${id}&status=${ENGINE_STATE.Started}`,
    });
  };

  public stopEngine = (): Promise<void> => {
    const { ENGINE_STATE } = RaceListItem;
    const { ENGINE_URL, id } = this;
    return this.awaitedFetch({
      method: 'PATCH',
      queryString: `${ENGINE_URL}?id=${id}&status=${ENGINE_STATE.Stopped}`,
    });
  };

  public setDuration = ({ distance, velocity }: StartEngine): void => {
    this.time = Math.round(distance / velocity);
  };

  public startAnimation = async (): Promise<Animation> => {
    const { carSvg, finish } = this.track;
    const startedPosition = carSvg.node.getBoundingClientRect().x;
    const finalPostion = finish.node.getBoundingClientRect().x;
    const framesCount = (this.time / 1000) * 60;
    const dx = (finalPostion - startedPosition) / framesCount;
    return new Promise((response) => {
      const animate = (): void => {
        this.currentPosition += dx;
        carSvg.node.style.transform = `translateX(${this.currentPosition}px)`;
        if (this.currentPosition < finalPostion) {
          this.animationId = requestAnimationFrame(animate);
        } else {
          response({ id: this.id, time: this.time });
        }
      };
      animate();
    });
  };

  public stopAnimation = (): void => {
    cancelAnimationFrame(this.animationId);
  };

  public moveToOriginPosition = (): void => {
    const { node } = this.track.carSvg;
    this.currentPosition = 0;
    node.style.transform = 'translateX(0px)';
  };
}

export default RaceListItem;
