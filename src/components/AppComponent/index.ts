/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import Component from '../../base/Component';
import Router from '../../base/Router';

import Tags from '../../enums/Tags';
import RequestMethods from '../../enums/RequestMethods';
import API from '../../enums/API';
import CustomEvents from '../../enums/CustomEvents';

import { InitProps, Skeleton, HeaderChildren, MainChildren } from './types';
import { AppView } from '../../models';

class AppComponent extends Component<Tags.div> {
  private static count = 0;
  private header: null | Component<Tags.header> = null;
  private main: null | Component<Tags.main> = null;
  private routerRoot: null | Component<Tags.div> = null;
  private navLinks: Array<Component<Tags.a>> = [];
  constructor() {
    super({
      tagName: Tags.div,
      classList: ['app-root'],
    });
    if (AppComponent.count > 0) return;
    AppComponent.count += 1;
    document.body.textContent = '';
    document.body.append(this.node);
  }

  public start = ({ skeleton, headerProps, mainChildren }: InitProps) => {
    this.initLayoutSkeleton(skeleton);
    this.initHeaderLayout(headerProps);
    this.initMainLayout(mainChildren);
  };

  public getData = () => {
    this.load({
      method: RequestMethods.get,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
    });
  };

  public initRouter = (errorView: AppView, routes: Array<AppView>) => {
    if (!this.routerRoot || !this.navLinks.length) {
      throw new Error('There is not routerRoot or navLinks is Empty');
    }
    return new Router(this.routerRoot, this.navLinks, errorView, routes);
  };

  private initLayoutSkeleton = ({ header, main }: Skeleton) => {
    this.append(header, main);
    this.header = header;
    this.main = main;
  };

  private initHeaderLayout = ({ boundingBox, contentBox, nav, list, listItems, navLinks }: HeaderChildren) => {
    if (!this.header) return;
    this.header.append(boundingBox);
    boundingBox.append(contentBox);
    contentBox.append(nav);
    nav.append(list);
    list.append(...listItems);
    listItems.forEach((li, index) => li.append(navLinks[index]));
    this.navLinks = navLinks;
  };
  private initMainLayout = ({ boundingBox, contentBox }: MainChildren) => {
    if (!this.main) return;
    this.main.append(boundingBox);
    boundingBox.append(contentBox);
    this.routerRoot = contentBox;
  };
}

export default AppComponent;
