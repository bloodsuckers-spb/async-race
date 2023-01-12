import Component from '../../base/Component';

class GarageView extends Component<'div'> {
  // child: Component<'div'>
  constructor() {
    super({
      tagName: 'div',
      classList: ['garage'],
      nodeProps: {
        textContent: 'Garage',
      },
    });
    // this.node.append(child.node);
  }
}

export default GarageView;
