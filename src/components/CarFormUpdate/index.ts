/* eslint-disable class-methods-use-this */

import Component from '../../base/Component';
import Loader from '../../base/Loader';

import UpdateCarBtn from './components/Btn';
import UpdateCarColorInput from './components/ColorInput';
import UpdateCarTextInput from './components/TextInput';

import { errorMessage } from '../../constants';

import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';
import RequestMethods from '../../enums/RequestMethods';
import Tags from '../../enums/Tags';

import { FormProps } from '../../models';
import { isCar } from '../../models/Predicates';

interface UpdateCarForm extends FormProps {
  load: (...args: Array<unknown>) => void;
}

@Loader()
class UpdateCarForm extends Component<Tags.form> {
  private selectedId = 0;
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
    this.btn.node.onclick = (): false => {
      this.handleClick();
      this.clear();
      return false;
    };

    this.on(CustomEvents.selectCar, this.onSelect);
  }

  private onSelect = <T>(data: T): void => {
    if (typeof data !== 'object' || data === null || !isCar(data)) {
      throw new Error(errorMessage);
    }

    const { name, id, color } = data;
    this.textInput.node.readOnly = false;
    this.btn.node.disabled = false;
    this.textInput.node.value = name;
    this.colorInput.node.value = color;
    this.selectedId = id;
  };

  private handleOnInput = (): void => {
    const { value } = this.textInput.node;
    const trimmed = value.trim();

    if (!trimmed.length && !this.btn.node.disabled) {
      this.btn.node.disabled = true;
    }

    if (trimmed.length && this.btn.node.disabled) {
      this.btn.node.disabled = false;
    }

    this.textInput.node.value = trimmed;
  };

  private handleClick = (): void => {
    this.load({
      method: RequestMethods.put,
      queryString: `${API.baseLink}/garage/${this.selectedId}`,
      eventName: CustomEvents.updateCar,
      options: {
        name: this.textInput.node.value,
        color: this.colorInput.node.value,
      },
      cb: this.emit,
    });
  };

  private clear = (): void => {
    this.textInput.node.value = '';
    this.textInput.node.readOnly = true;
    this.btn.node.disabled = true;
  };
}

const updateCardForm = new UpdateCarForm({
  textInput: UpdateCarTextInput,
  colorInput: UpdateCarColorInput,
  btn: UpdateCarBtn,
});

export default updateCardForm;
