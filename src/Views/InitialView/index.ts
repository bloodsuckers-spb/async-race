/* eslint-disable @typescript-eslint/comma-dangle */
import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class InitialView<T extends keyof Route<'div'>> extends Router {
  constructor(
    readonly viewModel: Component<'div'>,
    readonly route: T,
    readonly root: HTMLElement,
    readonly navLinks: Array<Component<'a'>>
  ) {
    super();
    const currentView = { [route]: viewModel };
    Router.views.push(currentView);
    this.root = root;
    this.initialView = currentView;
    this.currentView = this.initialView;
    this.renderView(viewModel);
    this.listen(navLinks);
  }
}

export default InitialView;
