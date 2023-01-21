/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import RaceItemHeader from '../RaceItemHeader';
import CarSvg from '../CarSvg';

import styles from './index.css';

import { isCar } from '../../common/IsCar';

import { HashType } from '../../models';
import { Car } from '../../models/API';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';

import { errorMessage } from '../../constants';

const { racetrack } = styles;

export type Response = {
  data: Car;
};

const isResponse = <T>(arg: T | Response): arg is Response => {
  if (typeof arg !== 'object' || arg === null || !('data' in arg)) {
    return false;
  }
  return true;
};

class TracksListItem extends Component<Tags.li> {
  protected header: RaceItemHeader;
  protected carSvg: CarSvg;
  protected name: string;
  protected color: HashType;
  protected readonly id: number;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: Tags.li,
      classList: [racetrack],
      parent: parent.node,
    });

    this.header = new RaceItemHeader(this, { name, color, id });
    this.carSvg = new CarSvg(this, color);
    this.name = name;
    this.color = color;
    this.id = id;

    this.on(CustomEvents.updateSelectedCar, this.onUpdate);
  }

  onUpdate = <T>(arg: T) => {
    if (!isResponse(arg) || !isCar(arg.data)) {
      throw new Error(errorMessage);
    }

    const { id, name, color } = arg.data;
    if (id !== this.id) return;

    if (this.name !== name) {
      const { heading } = this.header;
      this.name = name;
      heading.node.textContent = name;
    }

    if (this.color !== color) {
      this.color = color;
      this.carSvg.node.style.fill = `${color}`;
    }
  };

  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default TracksListItem;
