import Component from '../../base/Component';

class WinnersView extends Component<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['winners'],
      nodeProps: {
        textContent: 'Winners',
      },
    });
  }
}

export default WinnersView;
