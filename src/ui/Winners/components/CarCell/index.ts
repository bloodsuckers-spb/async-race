import Component from '../../../../base/Component';

import Tags from '../../../../enums/Tags';

import { HashType } from '../../../../models';

import CarSvg from '../../../CarSvg';

import styles from './index.css';

const { small } = styles;

class CarCell extends Component<Tags.div> {
  public carSvg: CarSvg;
  constructor(color: HashType) {
    super({
      tagName: Tags.div,
      classList: ['cell'],
    });
    this.carSvg = new CarSvg({ parent: this, color });
    this.carSvg.node.classList.add(small);
  }
}

export default CarCell;
