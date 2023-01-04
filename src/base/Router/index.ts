/* eslint-disable max-len */
import Component from '../Component';

type View = Record<string, Component>;
abstract class Router {
  #root: HTMLElement = document.body;
  protected views: Array<View> = [];
  protected currentView: View | null = null;
  protected initialView: View | null = null;
  protected errorView: View | null = null;

  protected listen() {
    console.log('listen');
    // navlinks.forEach((link: HTMLAnchorElement) => link.addEventListener('click', this.handleNavigate));
    window.onpopstate = () => console.log('onpopstate');
    document.onreadystatechange = () => {
      console.log(document.readyState);
      if (document.readyState === 'interactive') {
        console.log('interactive');
        this.handleLocation();
      }
    };
  }

  // private handleLoading() {
  //   const { pathname } = window.location;
  //   if (pathname !== this.#appConstants.home) {
  //     // this.navigate();
  //     console.log(this);
  //   }
  // }

  private handleLocation() {
    const { pathname } = window.location;
    const component = this.views.find((view) => pathname in view);
    const route = component || this.errorView;
    return route;
  }

  // private renderView(node: HTMLDivElement) {
  //   this.currentView = node;
  //   this.#root.append(this.currentView);
  // }
}

export default Router;
