/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import Router from './base/Router';
import Component from './base/Component';
import { createRoutes, initRouter } from './common';

import AppComponent from './components/AppComponent';
import LayoutHeader from './components/LayoutHeader';
import MainLayout from './init/MainLayout';
import initGarageLayout from './init/InitGarageLayout';
import initWinnersLayout from './init/InitWinnersLayout';

import RaceTracksList from './components/RaceTracksList';

import ErrorView from './components/ErrorView';
import GarageView from './components/GarageView';
import WinnersView from './components/WinnersView';

import Routes from './enums/Routes';

import './index.css';

const initApp = (AppComp: typeof AppComponent) => {
  document.body.textContent = '';
  const app = new AppComp();

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

  // generate views
  const errorRoute = createRoutes(Routes.page404, errorView);
  const garageRoute = createRoutes(Routes.garage, garageView);
  const winnersRoute = createRoutes(Routes.winners, winnersView);

  // initRouter
  initRouter(root, [FirstNavLink, SecondNavLink], errorRoute, [garageRoute, winnersRoute]);

  return initApp;
};

initApp(AppComponent);
