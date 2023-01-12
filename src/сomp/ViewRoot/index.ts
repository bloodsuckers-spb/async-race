import Component from '../../base/Component';

class ViewRoot extends Component<'main'> {
  constructor() {
    super({
      tagName: 'main',
      classList: ['main'],
    });
  }
}

export default ViewRoot;
