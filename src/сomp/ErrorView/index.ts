import Component from '../../base/Component';

class ErrorView extends Component<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['error'],
      nodeProps: {
        textContent: '404',
      },
    });
  }
}

export default ErrorView;
