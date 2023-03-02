import { Car } from 'models';

import { Component } from 'base';

export type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  carData: Car;
  handlers: {
    startDriving: () => void;
    stopDriving: () => void;
  };
};
