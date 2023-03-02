import Component from '../../../../base/Component';

import Btn from './components/Btn';
import ColorInput from './components/ColorInput';
import TextInput from './components/TextInput';

import { CustomEvents, RequestMethods, Tags } from '../../../../enums';

import { AbstractFetch, FormProps } from '../../../../models';

import { AsyncFetch, Loader } from '../../../../decorators';

interface CreateCarForm extends FormProps, AbstractFetch {
  load: (...args: Array<unknown>) => void;
}

@Loader()
@AsyncFetch()
class CreateCarForm extends Component<Tags.form> {
  constructor({ textInput, colorInput, btn }: FormProps) {
    super({
      tagName: Tags.form,
      classList: ['form'],
    });

    this.textInput = textInput;
    this.colorInput = colorInput;
    this.btn = btn;
    this.append(textInput, colorInput, btn);

    this.textInput.node.oninput = (): void => this.handleOnInput();
    this.btn.node.onclick = (): false => this.handleClick();
  }

  private handleClick = (): false => {
    this.btn.node.disabled = true;

    if (!this.textInput.node.value) {
      return false;
    }

    this.load({
      method: RequestMethods.post,
      queryString: `${this.GARAGE_URL}`,
      eventName: CustomEvents.addCar,
      options: {
        name: this.textInput.node.value,
        color: this.colorInput.node.value,
      },
      cb: this.emit,
    });

    this.textInput.node.value = '';

    return false;
  };

  private handleOnInput = (): void => {
    const { value } = this.textInput.node;
    const { node } = this.btn;
    this.textInput.node.value = value.trim();
    if (!node.disabled) return;
    node.disabled = false;
  };
}

export const CreateFormProps = {
  textInput: TextInput,
  colorInput: ColorInput,
  btn: Btn,
};

export default CreateCarForm;
