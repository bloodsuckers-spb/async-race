/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';

class Racer extends Component<'li'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'li',
      classList: ['racer'],
      nodeProps: {
        textContent: 'Racer',
      },
      parent: parent.node,
    });
  }
  startAnimation() {}
  stopAnimation() {}
  moveToOriginPosition() {}
}

export default Racer;
