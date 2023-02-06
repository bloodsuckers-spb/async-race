import Router from './base/Router';

import AppComponent from './components/AppComponent';
import firstNavLink from './ui/AppHeader/components/FirstNavLink';
import secondNavLink from './ui/AppHeader/components/SecondNavLink';
import RouterRoot from './ui/AppMain/components/RouterRoot';

import AppFragment from './ui/AppFragment';
import { errorRoute, garageRoute, winnersRoute } from './ui/Routes';

import './global.css';

(() =>
  new AppComponent(
    AppFragment,
    new Router({
      root: RouterRoot,
      navLinks: [firstNavLink, secondNavLink],
      errorView: errorRoute,
      views: [garageRoute, winnersRoute],
    })
  ))();
