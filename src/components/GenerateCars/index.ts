import axios from 'axios';

import Component from '../../base/Component';

import carsBrands from '../../constants/carsBrands';
import carsModels from '../../constants/carsModels';

import { API, CustomEvents, RequestMethods, Tags } from '../../enums';

import { Emit, HashType, NewCar } from '../../models';

class GenerateCars extends Component<Tags.button> {
  private static readonly letters = '0123456789ABCDEF';
  constructor(protected readonly brands: Array<string>, protected readonly models: Array<string>) {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        textContent: 'Generate',
      },
    });
    this.node.onclick = (): void => this.generateCars(this.emit);

    this.on(CustomEvents.StartRace, this.changeBtnState);
    this.on(CustomEvents.ResetRace, this.changeBtnState);
    this.on(CustomEvents.StartCarDriving, this.changeBtnState);
    this.on(CustomEvents.ResetCarDriving, this.changeBtnState);
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

  private get carName(): string {
    const modelCar = this.brands[Math.floor(Math.random() * this.brands.length)];
    const nameCar = this.models[Math.floor(Math.random() * this.models.length)];
    return `${modelCar} - ${nameCar}`;
  }

  private generateCars = (emit: Emit): void => {
    const promises = Array(15)
      .fill(null)
      .reduce((acc: Array<NewCar>) => {
        acc.push({
          name: this.carName,
          color: GenerateCars.carColor,
        });
        return acc;
      }, [])
      .map((car) => axios[RequestMethods.post](`${API.garageLink}`, car));
    Promise.all(promises).then(() => emit(CustomEvents.generateCars, {}));
  };

  private changeBtnState = (): void => {
    this.node.disabled = !this.node.disabled;
  };
}

export default new GenerateCars(carsBrands, carsModels);
