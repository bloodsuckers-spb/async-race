/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import Router from './base/Router';
import Load from './base/Loader';
import Component from './base/Component';

import AppComponent from './components/AppComponent';
import LayoutHeader from './components/LayoutHeader';
import MainLayout from './init/MainLayout';
import initGarageLayout from './init/InitGarageLayout';
import initWinnersLayout from './init/InitWinnersLayout';

import NavLink from './components/NavLinks';
import RaceTracksList from './components/RaceTracksList';

import ErrorView from './components/ErrorView';
import GarageView from './components/GarageView';
import WinnersView from './components/WinnersView';

import API from './enums/API';
import RequestMethods from './enums/RequestMethods';
import Routes from './enums/Routes';
import CustomEvents from './enums/CustomEvents';
import { GetCarsResponse } from './models/API';

import { AppView } from './models';

import './index.css';

const initRouter = (root: Component<'main'>, navLinks: Array<NavLink>, errorView: AppView, routes: Array<AppView>) =>
  new Router(root, navLinks, errorView, routes);

const createRoutes = <T extends Routes>(key: T, view: Component<'div'>) => ({ [key]: view });

const initApp = () => {
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
    Load<GetCarsResponse>({
      method: RequestMethods.get,
      queryString: `${API.baseLink}/garage?_page=1&_limit=7`,
      eventName: CustomEvents.updateCars,
      cb: app.emit,
    });
  }, 3000);

  // generate views
  const errorRoute = createRoutes(Routes.page404, errorView);
  const garageRoute = createRoutes(Routes.garage, garageView);
  const winnersRoute = createRoutes(Routes.winners, winnersView);

  // initRouter
  initRouter(root, [FirstNavLink, SecondNavLink], errorRoute, [garageRoute, winnersRoute]);

  return initApp;
};

initApp();
