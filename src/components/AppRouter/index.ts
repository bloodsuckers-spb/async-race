/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import Component from '../../base/Component';
import EventEmitter from '../../base/EventEmitter';

import { HandleLocation, Navigate, RenderView, RouterProps } from './types';

import CustomEvents from '../../enums/CustomEvents';
import Tags from '../../enums/Tags';

import { AppView, Emit } from '../../models';

interface Router extends RouterProps {}

class Router extends EventEmitter {
  private static count = 0;
  private initialView: AppView = {};
  protected currentView: AppView = {};
  constructor({ root, navLinks, errorView, views }: RouterProps) {
    super();
    if (Router.count > 0) return;
    Router.count += 1;
    navLinks.forEach(({ node }: Component<Tags.a>) => {
      node.onclick = (): false => {
        Router.handleNavigate(node.href, () => Router.navigate(this.handleLocation, this.renderView, this.emit));
        return false;
      };
    });
    const [initial] = views;
    this.root = root;
    this.errorView = errorView;
    this.views = views;
    this.initialView = initial;
    this.currentView = this.initialView;
    Router.navigate(this.handleLocation, this.renderView, this.emit);
    window.onpopstate = (): false =>
      Router.handlePopstate(() => Router.navigate(this.handleLocation, this.renderView, this.emit));
    window.addEventListener('DOMContentLoaded', () =>
      Router.handleLoading(() => Router.navigate(this.handleLocation, this.renderView, this.emit))
    );
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

  private static navigate = (handleLocation: HandleLocation, renderView: RenderView, emit: Emit): void => {
    renderView(handleLocation(emit));
  };

  private handleLocation = (emit: Emit): Component<Tags.div> => {
    const { pathname } = window.location;
    const component = this.views.find((view) => pathname in view);
    emit(CustomEvents.changeView, pathname);
    this.currentView = component ?? this.errorView;
    return component ? component[pathname] : this.errorView['/404']!;
  };

  private renderView = (view: Component<Tags.div>): void => {
    this.root.node.firstChild?.remove();
    this.root.node.append(view.node);
  };
}

export default Router;
