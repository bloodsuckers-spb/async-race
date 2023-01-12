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
    // this.node.append(child.node);
  }
}

export default WinnersView;
