/* eslint-disable implicit-arrow-linebreak */
import Component from '../base/Component';
import Router from '../base/Router';

import Routes from '../enums/Routes';
import Tags from '../enums/Tags';
import NavLink from '../components/NavLinks';
import { AppView } from '../models';

export const createRoutes = (key: Routes, view: Component<Tags.div>) => ({ [key]: view });

export const initRouter = (
  root: Component<Tags.main>,
  navLinks: Array<NavLink>,
  errorView: AppView,
  routes: Array<AppView>,
) => new Router(root, navLinks, errorView, routes);
