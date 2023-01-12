/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-new */
import Router from './base/Router';
import Component from './base/Component';
import BoundingComponent from './сomp/BoundingComponent';
import ContentComponent from './сomp/ContentComponent';

import AppComponent from './сomp/App';
import Header from './сomp/Header';
import Nav from './сomp/Nav';
import List from './сomp/List';
import ListItem from './сomp/ListItem';
import NavLink from './сomp/NavLinks';

import ViewRoot from './сomp/ViewRoot';
import ErrorView from './сomp/ErrorView';
import GarageView from './сomp/GarageView';

import Routes from './enums/Routes';

import { AppView } from './models';

import './index.css';
import WinnersView from './сomp/WinnersView';

const initRouter = (root: Component<'main'>, navLinks: Array<NavLink>, errorView: AppView, routes: Array<AppView>) =>
  new Router(root, navLinks, errorView, routes);

const createRoutes = <T extends Routes>(key: T, view: Component<'div'>) => ({ [key]: view });

const initApp = () => {
  document.body.textContent = '';
  // Header
  const FirstNavLink = new NavLink({ href: Routes.garage, textContent: 'Garage' });
  const SecondNavLink = new NavLink({ href: Routes.winners, textContent: 'Winners' });
  const FirstListItem = new ListItem([FirstNavLink]);
  const SecondListItem = new ListItem([SecondNavLink]);
  const list = new List([FirstListItem, SecondListItem]);
  const nav = new Nav([list]);
  const headerContent = new ContentComponent([nav]);
  const headerBounding = new BoundingComponent(headerContent);
  const header = new Header(headerBounding);
  // Main
  const main = new ViewRoot();
  const errorView = new ErrorView();
  const garageView = new GarageView();
  const winnersView = new WinnersView();
  // generate views
  const errorRoute = createRoutes(Routes.page404, errorView);
  const garageRoute = createRoutes(Routes.garage, garageView);
  const winnersRoute = createRoutes(Routes.winners, winnersView);
  // App
  const app = new AppComponent([header, main]);
  // initRouter
  initRouter(main, [FirstNavLink, SecondNavLink], errorRoute, [garageRoute, winnersRoute]);
  return initApp;
};

initApp();
