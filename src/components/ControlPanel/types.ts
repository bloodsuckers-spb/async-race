import Btn from '../../ui/Button';

import { Car } from '../../models';

import { Component } from '../../base';

export type ControlPanelBtns = {
  select: Btn;
  start: Btn;
  reset: Btn;
  remove: Btn;
};

export type Props = {
  parent: Component<keyof HTMLElementTagNameMap>;
  carData: Car;
  handlers: {
    startDriving: () => void;
    stopDriving: () => void;
  };
};
