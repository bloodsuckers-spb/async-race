/* eslint-disable max-len */
import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class View<T extends keyof Route> extends Router {
  constructor(view: Component, readonly route: T) {
    super();
    Router.views.push({ [route]: view });
  }
}

export default View;
