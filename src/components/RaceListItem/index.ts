import Component from '../../base/Component';

import Track from '../../ui/Track';

import Store from '../../decorators/Store';
import RaceItemHeader from '../RaceItemHeader';

import { errorMessage } from '../../constants';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { HashType } from '../../models';
import { Car } from '../../models/API';
import { isCar, isResponse } from '../../models/Predicates';
import { AbstractStore } from '../../models/StoreType';

import styles from './index.css';

interface RaceListItem extends AbstractStore {
  header: RaceItemHeader;
  track: Track;
  name: string;
  color: HashType;
  animationId: number;
  finalPostion: number;
  currentPosition: number;
}

@Store()
class RaceListItem extends Component<Tags.li> {
  protected readonly id: number;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, carData: Car) {
    super({
      tagName: Tags.li,
      classList: [styles.racetrack],
      parent: parent.node,
    });

    this.header = new RaceItemHeader({
      parent: this,
      carData,
      handlers: {
        startAnimation: this.startAnimation,
        stopAnimation: this.stopAnimation,
        moveToOriginPosition: this.moveToOriginPosition,
      },
    });

    const { name, color, id } = carData;

    this.track = new Track({
      parent: this,
      carColor: color,
    });

    this.name = name;
    this.color = color;
    this.id = id;

    this.currentPosition = 0;

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

  private startAnimation = (): void => {
    // const framesCount = (10 / 1000) * 60;
    const finalPostion = this.track.finish.node.offsetLeft;
    const dx = 5;
    const animate = (): void => {
      this.currentPosition += dx;
      this.track.carSvg.node.style.transform = `translateX(${this.currentPosition}px)`;
      if (this.currentPosition < finalPostion) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(this.animationId);
      }
    };
    animate();
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
