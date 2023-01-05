import Router from '../Router';
import Component from '../Component';
import { Route } from '../../models';

class View<T extends keyof Route> extends Router {
  constructor(readonly view: Component, readonly route: T, readonly isErrorView = false) {
    super();
    const currentView = { [route]: view };
    if (!isErrorView) {
      this.views.push(currentView);
      if (!this.initialView) {
        this.initialView = currentView;
        this.currentView = currentView;
        this.listen();
      }
    } else {
      this.errorView = currentView;
    }
  }
}

export default View;
