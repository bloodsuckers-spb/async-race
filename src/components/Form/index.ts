import Component from '../../base/Component';

import Tags from '../../enums/Tags';
// import CustomEvents from '../../enums/CustomEvents';

interface FormProps {
  textInput: Component<Tags.input>;
  colorInput: Component<Tags.input>;
  btn: Component<Tags.button>;
}

interface Form extends FormProps {}

class Form extends Component<Tags.form> {
  constructor({ textInput, colorInput, btn }: FormProps) {
    super({
      tagName: Tags.form,
      classList: ['form'],
    });
    this.textInput = textInput;
    this.colorInput = colorInput;
    this.btn = btn;
    this.append(textInput, colorInput, btn);
    this.textInput.node.oninput = () => {
      const { node } = this.btn;
      if (!node.disabled) return;
      node.disabled = false;
    };
    this.btn.node.onclick = () => {
      this.btn.node.disabled = true;
      this.textInput.node.value = '';
      console.log('click');
    };
  }
}

export default Form;
