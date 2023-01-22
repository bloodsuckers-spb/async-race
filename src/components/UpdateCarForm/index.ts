/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Tags from '../../enums/Tags';
import { FormProps } from '../../models';
import CustomEvents from '../../enums/CustomEvents';
import { errorMessage } from '../../constants';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import { isCar } from '../../common/IsCar';

interface UpdateCarForm extends FormProps {}

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

    this.textInput.node.oninput = () => this.handleOnInput();
    this.btn.node.onclick = () => {
      this.handleClick();
      this.clear();
      return false;
    };

    this.on(CustomEvents.selectCar, this.onSelect);
  }

  onSelect = <T>(data: T) => {
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

  handleOnInput = () => {
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

  handleClick = () => {
    this.load({
      method: RequestMethods.put,
      queryString: `${API.baseLink}/garage/${this.selectedId}`,
      eventName: CustomEvents.updateSelectedCar,
      options: {
        name: this.textInput.node.value,
        color: this.colorInput.node.value,
      },
    });
  };

  private clear = () => {
    this.textInput.node.value = '';
    this.textInput.node.readOnly = true;
    this.btn.node.disabled = true;
  };
}

export default UpdateCarForm;
