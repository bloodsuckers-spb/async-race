/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';

import styles from './index.css';

// import { renderCar } from '../../utils';

// const { racetrack } = styles;

class Racer extends Component<'li'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'li',
      classList: ['racer'],
      parent: parent.node,
    });

    // this.node.innerHTML = renderCar('#000');
  }
  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default Racer;
