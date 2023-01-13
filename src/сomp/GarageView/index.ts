import Component from '../../base/Component';

class GarageView extends Component<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['garage'],
      nodeProps: {
        textContent: 'Garage',
      },
    });
    this.on('updateCars', this.onUpdate);
  }

  onUpdate = (data: any) => {
    console.log(data);
    const { textContent } = this.node;
    this.node.textContent = `${textContent}1`;
  };
}

export default GarageView;
