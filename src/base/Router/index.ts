/* eslint-disable no-param-reassign */
import Component from '../Component';

import Tags from '../../enums/Tags';

import { AppView } from '../../models';

interface RouterProps {
  root: Component<Tags.div>;
  navLinks: Array<Component<Tags.a>>;
  errorView: AppView;
  views: Array<Record<string, Component<Tags.div>>>;
}

interface Router extends RouterProps {}

class Router {
  private static count = 0;
  private initialView: AppView = {};
  private currentView: AppView = {};
  constructor({ root, navLinks, errorView, views }: RouterProps) {
    if (Router.count > 0) return;
    Router.count += 1;
    navLinks.forEach(({ node }: Component<Tags.a>) => {
      node.onclick = (): false => {
        this.handleNavigate(node.href);
        return false;
      };
    });
    const [initial] = views;
    this.root = root;
    this.errorView = errorView;
    this.views = views;
    this.initialView = initial;
    this.currentView = this.initialView;
    this.navigate();
    window.onpopstate = this.handlePopstate;
    window.addEventListener('DOMContentLoaded', this.handleLoading);
  }

  private handleNavigate = (href: string): void => {
    window.history.pushState({}, '', href);
    this.navigate();
  };

  private handleLoading = (): void => {
    const { pathname } = window.location;
    if (pathname !== '/') {
      this.navigate();
    }
  };
  private handlePopstate = (): false => {
    this.navigate();
    return false;
  };

  private navigate = (): void => {
    const view = this.handleLocation();
    this.renderView(view);
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
