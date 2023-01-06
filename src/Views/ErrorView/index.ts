import Router from '../../base/Router';
import Component from '../../base/Component';

import { Route } from '../../models';

class ErrorView<T extends keyof Route> extends Router {
  constructor(readonly view: Component, readonly route: T) {
    super();
    this.errorView = { [route]: view };
  }
}

export default ErrorView;
