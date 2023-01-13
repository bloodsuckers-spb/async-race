import Component from '../../base/Component';

class Form extends Component<'form'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'form',
      classList: ['form'],
      nodeProps: {
        textContent: 'Form',
      },
      parent: parent.node,
    });
  }
}

export default Form;
