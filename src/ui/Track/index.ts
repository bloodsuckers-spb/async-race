/* eslint-disable import/no-useless-path-segments */
import Component from '../../base/Component';

import CarSvg from '../../ui/CarSvg';
import Finish from '../../ui/Finish';

import Tags from '../../enums/Tags';

import { HashType } from '../../models';

import styles from './index.css';

interface Track {
  carSvg: CarSvg;
  finish: Finish;
}

type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  carColor: HashType;
};

class Track extends Component<Tags.div> {
  constructor({ parent, carColor }: Props) {
    super({
      tagName: Tags.div,
      classList: [styles.track],
      parent: parent.node,
    });

    this.carSvg = new CarSvg({
      parent: this,
      color: carColor,
    });
    this.finish = new Finish({
      parent: this,
    });
  }
}

export default Track;
