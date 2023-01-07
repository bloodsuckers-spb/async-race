import Router from '../../base/Router';
import Component from '../../base/Component';
import { Route } from '../../models';

class InitialView<T extends keyof Route<'div'>> extends Router {
  constructor(readonly viewModel: Component<'div'>, readonly route: T, readonly navLinks: Array<Component<'a'>>) {
    super();
    const currentView = { [route]: viewModel };
    this.initialView = currentView;
    this.currentView = this.initialView;
    this.listen(navLinks);
  }
}

export default InitialView;
