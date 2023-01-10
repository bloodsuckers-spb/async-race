/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import Component from '../Component';
import { AppView } from '../../models';

abstract class Router {
  protected static views: Array<Record<string, Component<'div'>>> = [];
  protected static errorView: Record<string, Component<'div'>> = {};
  protected root: HTMLElement | null = null;
  protected initialView: AppView = {};
  protected currentView: AppView = {};

  protected listen(navlinks: Array<Component<'a'>>): void {
    navlinks.forEach(({ node }: Component<'a'>) => {
      node.onclick = (): false => {
        this.handleNavigate(node.href);
        return false;
      };
    });
    window.onpopstate = this.handlePopstate;
    window.addEventListener('DOMContentLoaded', this.handleLoading);
  }

  private handlePopstate = (): false => {
    this.navigate();
    return false;
  };

  // ToDo
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

  // Todo
  private navigate = () => {
    const view = this.handleLocation();
    this.renderView(view);
  };

  private handleLocation = (): Component<'div'> => {
    const { pathname } = window.location;
    const component = Router.views.find((view) => pathname in view);
    this.currentView = component ?? Router.errorView;
    const route = component ? component[pathname] : Router.errorView['/404'];
    return route;
  };

  protected renderView(view: Component<'div'>): void {
    this.root?.firstChild?.remove();
    this.root?.append(view.node);
  }
}

export default Router;
