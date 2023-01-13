/* eslint-disable implicit-arrow-linebreak */
import Router from './base/Router';
import Loader from './base/Loader';
import Component from './base/Component';

import AppComponent from './сomp/App';
import AppHeader from './сomp/AppHeader';
import AppMain from './сomp/AppMain';
import NavLink from './сomp/NavLinks';

import ErrorView from './сomp/ErrorView';
import GarageView from './сomp/GarageView';
import WinnersView from './сomp/WinnersView';

import API from './enums/API';
import Routes from './enums/Routes';

import { AppView } from './models';

import './index.css';

const initRouter = (root: Component<'main'>, navLinks: Array<NavLink>, errorView: AppView, routes: Array<AppView>) =>
  new Router(root, navLinks, errorView, routes);

const createRoutes = <T extends Routes>(key: T, view: Component<'div'>) => ({ [key]: view });

const initApp = (loader: Loader) => {
  document.body.textContent = '';
  const app = new AppComponent();
  const { FirstNavLink, SecondNavLink } = AppHeader(app);
  const { root } = AppMain(app);

  // Views
  const errorView = new ErrorView();
  const garageView = new GarageView();
  const winnersView = new WinnersView();

  loader.getCars();
  // loader.getCars();

  // generate views
  const errorRoute = createRoutes(Routes.page404, errorView);
  const garageRoute = createRoutes(Routes.garage, garageView);
  const winnersRoute = createRoutes(Routes.winners, winnersView);

  // initRouter
  initRouter(root, [FirstNavLink, SecondNavLink], errorRoute, [garageRoute, winnersRoute]);

  return initApp;
};

initApp(new Loader(API.baseLink));
