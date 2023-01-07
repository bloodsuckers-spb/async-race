/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import Component from '../Component';
import { AppView } from '../../models';

abstract class Router {
  #root: HTMLElement = document.body;
  protected static views: Array<Record<string, Component<'div'>>> = [];
  protected currentView: AppView = {};
  protected initialView: AppView = {};
  protected errorView: Record<string, Component<'div'>> = {};

  protected listen(navlinks: Array<Component<'a'>>) {
    navlinks.forEach((link: Component<'a'>) => {
      link.node.onclick = this.handleNavigate;
    });
    window.onpopstate = this.handlePopstate;
    window.addEventListener('DOMContentLoaded', this.handleLoading);
  }

  private handlePopstate = (event: Event) => {
    event.preventDefault();
    this.navigate();
  };

  private handleNavigate = (event: Event) => {
    const { target } = event;
    event.preventDefault();
    if (!(target instanceof HTMLAnchorElement)) {
      throw new Error('Ошибка! Элемент не является ссылкой');
    }
    window.history.pushState({}, '', target.href);
    this.navigate();
  };

  private handleLoading = () => {
    const { pathname } = window.location;
    if (pathname !== '/') {
      this.navigate();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private navigate = () => {
    const View = this.handleLocation();
    this.renderView(View);
  };

  private handleLocation = () => {
    const { pathname } = window.location;
    const component = Router.views.find((view) => pathname in view);
    this.currentView = component || this.errorView;
    const route = component ? component[pathname] : this.errorView[pathname];
    return route;
  };

  private renderView(view: Component<'div'>) {
    // this.currentView = view;
    console.log(this.currentView);
    this.#root.append(view.node);
  }
}

export default Router;
