import Router from '../Router';
import Component from '../Component';
import Routes from '../../enums/Routes';

class View<T extends Routes> extends Router {
  constructor(public view: Component, route: T, isErrorView = false) {
    super();
    const currentView = { [route]: view };
    if (!isErrorView) {
      if (!this.initialView) {
        this.initialView = currentView;
        this.currentView = currentView;
        this.listen();
      }
      this.views.push(currentView);
    } else {
      this.errorView = currentView;
    }
  }
}

export default View;
