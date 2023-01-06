import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class InitialView<T extends keyof Route> extends Router {
  constructor(readonly view: Component, readonly route: T, readonly navLinks: Array<Component>) {
    super();
    const currentView = { [route]: view };
    this.initialView = currentView;
    this.currentView = this.initialView;
    this.listen(navLinks);
  }
}

export default InitialView;
