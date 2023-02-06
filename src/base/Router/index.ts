/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import Component from '../Component';

import Tags from '../../enums/Tags';

import { AppView } from '../../models';

class Router {
  static count = 0;
  private initialView: AppView = {};
  private currentView: AppView = {};
  constructor(
    readonly root: Component<Tags.div>,
    readonly navLinks: Array<Component<Tags.a>>,
    readonly errorView: AppView,
    readonly views: Array<Record<string, Component<Tags.div>>>
  ) {
    if (Router.count > 0) return;
    Router.count += 1;
    navLinks.forEach(({ node }: Component<Tags.a>) => {
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

  private handleNavigate = (href: string) => {
    window.history.pushState({}, '', href);
    this.navigate();
  };

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

  private navigate = () => {
    const view = this.handleLocation();
    this.renderView(view);
  };

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
