import Component from '../../base/Component';

import CreateCarTextInput from '../../ui/CreateCarTextInput';
import CreateCarColorInput from '../../ui/CreateCarColorInput';
import CreateCarBtn from '../../ui/CreateCarBtn';

import API from '../../enums/API';
import Tags from '../../enums/Tags';
import RequestMethods from '../../enums/RequestMethods';
import CustomEvents from '../../enums/CustomEvents';
import { FormProps } from '../../models';

interface CreateCarForm extends FormProps {}

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

    this.textInput.node.oninput = () => this.handleOnInput();
    this.btn.node.onclick = () => this.handleClick();
  }

  private handleClick = () => {
    this.btn.node.disabled = true;

    if (!this.textInput.node.value) {
      return false;
    }

    this.load({
      method: RequestMethods.post,
      queryString: `${API.baseLink}/garage`,
      eventName: CustomEvents.createNewCar,
      options: {
        name: this.textInput.node.value,
        color: this.colorInput.node.value,
      },
    });

    this.textInput.node.value = '';

    return false;
  };

  private handleOnInput = () => {
    const { value } = this.textInput.node;
    const { node } = this.btn;
    this.textInput.node.value = value.trim();
    if (!node.disabled) return;
    node.disabled = false;
  };
}

const createForm = new CreateCarForm({
  textInput: CreateCarTextInput,
  colorInput: CreateCarColorInput,
  btn: CreateCarBtn,
});

export default createForm;