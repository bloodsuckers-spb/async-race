export type Listener = <T>(...params: Array<T>) => void;

export type EventMap = {
  [key: string]: Array<Listener>;
};
