import Component from '../../base/Component';

class GarageView extends Component<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['garage'],
    });
  }
}

export default GarageView;
