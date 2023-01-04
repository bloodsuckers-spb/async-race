import Component from '../base/Component';
import Routes from '../enums/Routes';

export type Listener = <T>(...params: Array<T>) => void;

export type EventMap = {
  [key: string]: Array<Listener>;
};

export type NodeData = {
  textContent?: string;
};

export type ComponentProps = {
  tagName: string;
  classList: Array<string>;
  nodeProps?: NodeData;
  parent?: HTMLElement;
};

export type Route<T extends Routes> = {
  [key in T]: Component;
};
