/* eslint-disable class-methods-use-this */
import Component from '../../../../base/Component';

import CarSvg from '../../../CarSvg';

import CustomEvents from '../../../../enums/CustomEvents';
import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { small } = styles;

class CarCell extends Component<Tags.div> {
  protected carSvg: CarSvg;
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['cell'],
    });
    this.carSvg = new CarSvg(this, '#fff');
    this.carSvg.node.classList.add(small);
    this.on(CustomEvents.updateWinner, this.onUpdate);
  }

  private onUpdate = <T>(args: T): void => {
    console.log('onUpdate');
    console.log(args);
  };
}

export default CarCell;
