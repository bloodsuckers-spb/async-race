import Component from '../../../../base/Component';

import Btn from './components/Btn';
import ColorInput from './components/ColorInput';
import TextInput from './components/TextInput';

import { CustomEvents, RequestMethods, Tags } from '../../../../enums';

import { AbstractFetch, FormProps } from '../../../../models';
import { isCar } from '../../../../models/predicates';

import { AsyncFetch, Loader } from '../../../../decorators';

interface CarFormUpdate extends FormProps, AbstractFetch {
  load: (...args: Array<unknown>) => void;
}

@Loader()
@AsyncFetch()
class CarFormUpdate extends Component<Tags.form> {
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
      throw new Error('Type of props is not valid');
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
      queryString: `${this.GARAGE_URL}/${this.selectedId}`,
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

export const updateCarFormProps = {
  textInput: TextInput,
  colorInput: ColorInput,
  btn: Btn,
};

export default CarFormUpdate;
