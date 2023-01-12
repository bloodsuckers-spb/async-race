/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import Component from '../Component';
import NavLink from '../../сomp/NavLinks';

import { AppView } from '../../models';

class Router {
  static count = 0;
  private initialView: AppView = {};
  private currentView: AppView = {};
  constructor(
    readonly root: Component<'main'>,
    readonly navLinks: Array<NavLink>,
    readonly errorView: AppView,
    readonly views: Array<Record<string, Component<'div'>>>
  ) {
    if (Router.count > 0) return;
    Router.count += 1;
    navLinks.forEach(({ node }: Component<'a'>) => {
      node.onclick = (): false => {
        this.handleNavigate(node.href);
        return false;
      };
    });
    const [initial] = views;
    this.initialView = initial;
    this.currentView = this.initialView;
    this.navigate();
    window.onpopstate = this.handlePopstate;
    window.addEventListener('DOMContentLoaded', this.handleLoading);
  }
  // Todo
  private handleNavigate = (href: string) => {
    window.history.pushState({}, '', href);
    this.navigate();
  };

  // Todo
  private handleLoading = () => {
    const { pathname } = window.location;
    if (pathname !== '/') {
      this.navigate();
    }
  };
  private handlePopstate = (): false => {
    this.navigate();
    return false;
  };
  // Todo
  private navigate = () => {
    const view = this.handleLocation();
    this.renderView(view);
  };
  // Todo

  private handleLocation = (): Component<'div'> => {
    const { pathname } = window.location;
    const component = this.views.find((view) => pathname in view);
    this.currentView = component ?? this.errorView;
    const route = component ? component[pathname] : this.errorView['/404']!;
    return route;
  };

  private renderView = (view: Component<'div'>): void => {
    this.root.node.firstChild?.remove();
    this.root.node.append(view.node);
  };
}

export default Router;
