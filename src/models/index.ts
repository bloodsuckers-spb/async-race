import Component from '../base/Component';

import CustomEvents from '../enums/CustomEvents';
import Routes from '../enums/Routes';
import Tags from '../enums/Tags';

export type NodeData = {
  textContent: string;
  href: string;
  id: string;
  type: 'text' | 'color';
  disabled: 'true' | 'false';
  readOnly: 'true';
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
  children?: Array<Component<keyof HTMLElementTagNameMap>>;
};

export type ComponentProps<T extends keyof HTMLElementTagNameMap> = HTMLComponentProps<T, NodeData>;

export type SvgComponentProps<T extends keyof SVGElementTagNameMap> = HTMLComponentProps<T, SvgNodeData>;

export type HashType = `#${string}`;

export interface FormProps {
  textInput: Component<Tags.input>;
  colorInput: Component<Tags.input>;
  btn: Component<Tags.button>;
}

export interface AbstractLoader {
  load: (...args: Array<unknown>) => void;
}

export type Emit = <T>(eventName: CustomEvents, params: T) => void;

export type Update = () => void;
