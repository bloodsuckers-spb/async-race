/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
// import State from '../../base/State';
//  import { Listener } from '../../models';

class RaceTracksList extends Component<'ul'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'ul',
      classList: ['race-tracks-list'],
      nodeProps: {
        textContent: '',
      },
      parent: parent.node,
    });
    this.on('updateCars', this.onUpdate);
  }

  onUpdate = <T>(params: T) => {
    if (typeof params !== 'object' || params === null || !('headers' in params)) {
      throw new Error('');
    }
    // const { headers } = params;
    // console.log(headers);
  };
}

export default RaceTracksList;
