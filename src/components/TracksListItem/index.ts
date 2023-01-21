/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import RaceItemHeader from '../RaceItemHeader';
import CarSvg from '../CarSvg';

import styles from './index.css';

import { HashType } from '../../models';
import { Car } from '../../models/API';
import Tags from '../../enums/Tags';
import CustomEvents from '../../enums/CustomEvents';

import { errorMessage } from '../../constants';

const { racetrack } = styles;

type UpdateCarData = {
  id: number;
  body: string;
};

type UpdateCar = {
  data: UpdateCarData;
};

type CarProperties = {
  name: string;
  color: HashType;
};

const isUpdateCar = <T>(arg: T | UpdateCar): arg is UpdateCar => {
  if (typeof arg !== 'object' || arg === null || !('data' in arg)) {
    return false;
  }
  return true;
};

const isUpdateCarData = <T>(data: T | UpdateCarData): data is UpdateCarData => {
  const keys = ['id', 'body'];
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  return keys.every((key) => key in data);
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
    if (!isUpdateCar(arg) || !isUpdateCarData(arg.data)) {
      throw new Error(errorMessage);
    }

    const { data } = arg;
    if (data.id !== this.id) {
      return;
    }

    const carProperties: CarProperties = JSON.parse(data.body);
    const { name, color } = carProperties;

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
