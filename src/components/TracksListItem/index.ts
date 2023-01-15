/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import RaceItemHeader from '../RaceItemHeader';

import CarSvg from '../CarSvg';

import styles from './index.css';

import { HashType } from '../../models';
import { Car } from '../../models/API';

const { racetrack } = styles;

class TracksListItem extends Component<'li'> {
  protected readonly header: RaceItemHeader;
  protected readonly carSvg: CarSvg;
  protected readonly name: string;
  protected readonly color: HashType;
  protected readonly id: number;
  constructor(parent: Component<keyof HTMLElementTagNameMap>, { name, color, id }: Car) {
    super({
      tagName: 'li',
      classList: [racetrack],
      parent: parent.node,
    });
    this.header = new RaceItemHeader(this, name);
    this.name = name;
    this.color = color;
    this.id = id;
    this.carSvg = new CarSvg(this, color);
  }
  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default TracksListItem;
