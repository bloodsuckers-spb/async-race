import CustomEvents from '../../enums/CustomEvents';

export type Listener = <T>(...params: Array<T>) => void;

export type EventMap = {
  [key in CustomEvents]: Array<Listener>;
};
