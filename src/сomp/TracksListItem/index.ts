/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import RaceItemHeader from '../RaceItemHeader';

import styles from './index.css';

// import { renderCar } from '../../utils';
import { Car } from '../../models/API';

const { racetrack } = styles;

class TracksListItem extends Component<'li'> {
  private readonly header: RaceItemHeader;
  name: string;
  color: string;
  readonly id: number;
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
    // this.node.innerHTML = renderCar('#000');
  }
  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default TracksListItem;
