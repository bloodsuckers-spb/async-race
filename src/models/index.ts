/* eslint-disable max-len */
import Component from '../base/Component';
import Routes from '../enums/Routes';
import Tags from '../enums/Tags';

export type Listener = <T>(...params: Array<T>) => void;

export type EventMap = {
  [key: string]: Array<Listener>;
};

export type NodeData = {
  textContent: string;
  href: string;
  id: string;
};

type SvgNodeData = {
  style: `fill:${HashType}`;
};

export type Route<T extends keyof HTMLElementTagNameMap> = {
  [key in Routes]: Component<T>;
};

export type AppView = Partial<Route<Tags.div>>;

export type HTMLComponentProps<T, U> = {
  tagName: T;
  classList: Array<string>;
  nodeProps?: Partial<U>;
  parent?: HTMLElement | SVGElement;
};

export type ComponentProps<T extends keyof HTMLElementTagNameMap> = HTMLComponentProps<T, NodeData>;

export type SvgComponentProps<T extends keyof SVGElementTagNameMap> = HTMLComponentProps<T, SvgNodeData>;

export type HashType = `#${string}`;
