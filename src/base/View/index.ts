/* eslint-disable max-len */
import Router from '../Router';
import Component from '../Component';
import { Route, ViewOptions } from '../../models';

class View<T extends keyof Route> extends Router {
  constructor(readonly view: Component, readonly route: T, readonly options: Partial<ViewOptions> = {}) {
    super();
    const currentView = { [route]: view };
    if (!options.isErrorView) {
      Router.views.push(currentView);
      if (!this.initialView && options.navLinks) {
        this.initialView = currentView;
        this.currentView = currentView;
        this.listen(options.navLinks);
      }
    } else {
      this.errorView = currentView;
    }
  }
}

export default View;
