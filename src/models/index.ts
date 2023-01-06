import Component from '../base/Component';
import Routes from '../enums/Routes';

export type Listener = <T>(...params: Array<T>) => void;

export type EventMap = {
  [key: string]: Array<Listener>;
};

export type NodeData = {
  textContent: string;
  href: string;
};

export type ComponentProps = {
  tagName: string;
  classList: Array<string>;
  nodeProps?: Partial<NodeData>;
  parent?: HTMLElement;
};

export type Route = {
  [key in Routes]: Component;
};

export type AppView = Partial<Route>;
