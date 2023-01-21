import Component from '../../base/Component';

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

    this.textInput.node.oninput = () => {
      const { value } = this.textInput.node;
      const { node } = this.btn;
      this.textInput.node.value = value.trim();
      if (!node.disabled) return;
      node.disabled = false;
    };

    this.btn.node.onclick = (): false => {
      this.btn.node.disabled = true;

      if (!this.textInput.node.value) {
        return false;
      }

      const nameValue = this.textInput.node.value;
      const colorValue = this.colorInput.node.value;

      const data = { name: nameValue, color: colorValue };

      this.load({
        method: RequestMethods.post,
        queryString: `${API.baseLink}/garage`,
        eventName: CustomEvents.createNewCar,
        options: {
          body: JSON.stringify(data),
        },
      });

      this.textInput.node.value = '';

      return false;
    };
  }
}

export default CreateCarForm;
