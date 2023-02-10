/* eslint-disable no-param-reassign */
import Component from '../../base/Component';

import { HandleLocation, Navigate, RenderView, RouterProps } from './types';

import Tags from '../../enums/Tags';

import { AppView } from '../../models';

interface Router extends RouterProps {}

class Router {
  private static count = 0;
  private initialView: AppView = {};
  protected currentView: AppView = {};
  constructor({ root, navLinks, errorView, views }: RouterProps) {
    if (Router.count > 0) return;
    Router.count += 1;
    navLinks.forEach(({ node }: Component<Tags.a>) => {
      node.onclick = (): false => {
        Router.handleNavigate(node.href, () => Router.navigate(this.handleLocation, this.renderView));
        return false;
      };
    });
    const [initial] = views;
    this.root = root;
    this.errorView = errorView;
    this.views = views;
    this.initialView = initial;
    this.currentView = this.initialView;
    Router.navigate(this.handleLocation, this.renderView);
    window.onpopstate = (): false => Router.handlePopstate(() => Router.navigate(this.handleLocation, this.renderView));
    window.addEventListener('DOMContentLoaded', () =>
      Router.handleLoading(() => Router.navigate(this.handleLocation, this.renderView)));
  }

  private static handleNavigate = (href: string, navigate: Navigate): void => {
    window.history.pushState({}, '', href);
    navigate();
  };

  private static handleLoading = (navigate: Navigate): void => {
    const { pathname } = window.location;
    if (pathname !== '/') {
      navigate();
    }
  };

  private static handlePopstate = (navigate: Navigate): false => {
    navigate();
    return false;
  };

  private static navigate = (handleLocation: HandleLocation, renderView: RenderView): void => {
    renderView(handleLocation());
  };

  private handleLocation = (): Component<Tags.div> => {
    const { pathname } = window.location;
    const component = this.views.find((view) => pathname in view);
    this.currentView = component ?? this.errorView;
    const route = component ? component[pathname] : this.errorView['/404']!;
    return route;
  };

  private renderView = (view: Component<Tags.div>): void => {
    this.root.node.firstChild?.remove();
    this.root.node.append(view.node);
  };
}

export default Router;
