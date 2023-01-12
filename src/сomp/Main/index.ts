import Component from '../../base/Component';

class Main extends Component<'main'> {
  constructor() {
    super({
      tagName: 'main',
      classList: ['main'],
    });
  }
}

export default Main;
