import Component from '../../base/Component';

import Btn from './components/Btn';
import ColorInput from './components/ColorInput';
import TextInput from './components/TextInput';

import Loader from '../../decorators/Loader';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { FormProps } from '../../models';

interface CreateCarForm extends FormProps {
  load: (...args: Array<unknown>) => void;
}

@Loader()
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
      queryString: `${API.baseLink}/garage`,
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

const CarFormCreate = new CreateCarForm({
  textInput: TextInput,
  colorInput: ColorInput,
  btn: Btn,
});

export default CarFormCreate;
