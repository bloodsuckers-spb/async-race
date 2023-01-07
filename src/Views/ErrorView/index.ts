import Router from '../../base/Router';
import Component from '../../base/Component';

import { Route } from '../../models';

class ErrorView<T extends keyof Route<'div'>> extends Router {
  constructor(readonly viewModel: Component<'div'>, readonly route: T) {
    super();
    this.errorView = { [route]: viewModel };
  }
}

export default ErrorView;
