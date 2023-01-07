import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class View<T extends keyof Route<'div'>> extends Router {
  constructor(viewModel: Component<'div'>, readonly route: T) {
    super();
    Router.views.push({ [route]: viewModel });
  }
}

export default View;
