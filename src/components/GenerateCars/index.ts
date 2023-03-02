import axios from 'axios';

import Component from '../../base/Component';

import carsBrands from '../../constants/carsBrands';
import carsModels from '../../constants/carsModels';

import { API, CustomEvents, RequestMethods, Tags } from '../../enums';

import { Emit, HashType, NewCar } from '../../models';

class GenerateCars extends Component<Tags.button> {
  private static readonly letters = '0123456789ABCDEF';
  constructor() {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: 'Generate',
      },
    });
    this.node.onclick = (): void => GenerateCars.generateCars(this.emit);
  }

  private static get carColor(): HashType {
    const color: HashType = Array(6)
      .fill(null)
      .reduce((acc) => {
        const current = GenerateCars.letters[Math.floor(Math.random() * 16)];
        return acc + current;
      }, '#');
    return color;
  }

  private static get carName(): string {
    const modelCar = carsBrands[Math.floor(Math.random() * carsBrands.length)];
    const nameCar = carsModels[Math.floor(Math.random() * carsModels.length)];
    return `${modelCar} - ${nameCar}`;
  }

  private static generateCars = (emit: Emit): void => {
    const promises = Array(15)
      .fill(null)
      .reduce((acc: Array<NewCar>) => {
        acc.push({
          name: GenerateCars.carName,
          color: GenerateCars.carColor,
        });
        return acc;
      }, [])
      .map((car) => axios[RequestMethods.post](`${API.garageLink}`, car));
    Promise.all(promises).then(() => emit(CustomEvents.generateCars, {}));
  };
}

export default new GenerateCars();
