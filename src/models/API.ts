export interface Car {
  name: string;
  color: string;
  id: number;
}

export type GetCarsResponse = {
  data: Array<Car>;
};

// color: '#e6e6fa';
