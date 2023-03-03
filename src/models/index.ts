/* eslint-disable simple-import-sort/imports */
import Component from '../base/Component';

import { CustomEvents, Routes, Tags } from '../enums';

import { FetchProps } from '../decorators/Fetch/types';
import { Store } from '../store/types';

import {
  AbstractResponse,
  Car,
  CarResponse,
  CarsResponse,
  CountedDataHeaders,
  CountedDataResponse,
  GetCarsResponse,
  Headers,
  LoadDecorator,
  Loading,
  LoadResponse,
  NewCar,
  QueryString,
  RequestOptions,
  Winner,
} from './API';

export type NodeData = {
  textContent: string;
  href: string;
  id: string;
  type: 'text' | 'color';
  disabled: 'true' | 'false';
  readOnly: 'true';
  onclick?: () => void
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

export type Load = (...args: Array<unknown>) => void;

export interface AbstractLoader {
  load: Load;
}

export type Emit = <T>(eventName: CustomEvents, params: T) => void;

export type Update = () => void;

export type CallBack = () => void;

export type EmitCallback = (emit: Emit) => void;

export type AppForms = {
  create: string;
  update: string;
};

export type PaginationBtns = {
  prev: string;
  next: string;
};

export interface AbstractStore {
  store: Store;
}

export interface AbstractFetch {
  BASE_URL: string;
  GARAGE_URL: string;
  WINNERS_URL: string;
  ENGINE_URL: string;
  fetch: (props: FetchProps) => void;
  fetchCountedData: (props: FetchProps) => void;
  awaitedFetch: <R>(props: Pick<FetchProps, 'method' | 'queryString'>) => Promise<R>;
}

export {
  AbstractResponse,
  Car,
  CarResponse,
  CarsResponse,
  CountedDataHeaders,
  CountedDataResponse,
  GetCarsResponse,
  Headers,
  LoadDecorator,
  Loading,
  LoadResponse,
  NewCar,
  QueryString,
  RequestOptions,
  Winner,
};
