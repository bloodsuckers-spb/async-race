/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import Router from './base/Router';
import Loader from './base/Loader';
import Component from './base/Component';

import AppComponent from './сomp/AppComponent';
import LayoutHeader from './сomp/LayoutHeader';
import MainLayout from './layout/MainLayout';
import initGarageLayout from './layout/InitGarageLayout';
import initWinnersLayout from './layout/InitWinnersLayout';

import NavLink from './сomp/NavLinks';
import RaceTracksList from './сomp/RaceTracksList';

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
  const { FirstNavLink, SecondNavLink } = LayoutHeader(app);
  const { root } = MainLayout(app);
  // Views
  const errorView = new ErrorView();
  const garageView = new GarageView();
  const winnersView = new WinnersView();
  initGarageLayout(garageView);
  initWinnersLayout(winnersView);
  const list = new RaceTracksList(garageView);
  // можно добавить класс

  setTimeout(() => {
    loader.getCars();
    loader.getCars();
  }, 1000);
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
