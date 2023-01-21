/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import RaceItemHeader from '../RaceItemHeader';

import CarSvg from '../CarSvg';

import styles from './index.css';

import { HashType } from '../../models';
import { Car } from '../../models/API';
import Tags from '../../enums/Tags';

const { racetrack } = styles;

class TracksListItem extends Component<Tags.li> {
  protected readonly header: RaceItemHeader;
  protected readonly carSvg: CarSvg;
  protected readonly name: string;
  protected readonly color: HashType;
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
  }
  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default TracksListItem;
