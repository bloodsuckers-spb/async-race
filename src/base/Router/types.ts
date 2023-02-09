import Component from 'base/Component';

import Tags from 'enums/Tags';

import { AppView } from 'models';

export interface RouterProps {
  root: Component<Tags.div>;
  navLinks: Array<Component<Tags.a>>;
  errorView: AppView;
  views: Array<Record<string, Component<Tags.div>>>;
}

export type Navigate = () => void;

export type HandleLocation = () => Component<Tags.div>;

export type RenderView = (view: Component<Tags.div>) => void;
