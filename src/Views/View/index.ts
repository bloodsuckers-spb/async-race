import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class View<T extends keyof Route> extends Router {
  constructor(viewModel: Component<HTMLDivElement>, readonly route: T) {
    super();
    Router.views.push({ [route]: viewModel });
  }
}

export default View;
