/* eslint-disable class-methods-use-this */
import Component from '../../../../base/Component';

import CarSvg from '../../../CarSvg';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { small } = styles;

class CarCell extends Component<Tags.div> {
  public carSvg: CarSvg;
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['cell'],
    });
    this.carSvg = new CarSvg(this, '#fff');
    this.carSvg.node.classList.add(small);
  }
}

export default CarCell;
