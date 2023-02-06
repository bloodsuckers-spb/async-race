/* eslint-disable @typescript-eslint/no-unused-vars */

import './global.css';

import Router from './base/Router';
import AppComponent from './components/AppComponent';

import AppFragment from './ui/AppFragment';
import firstNavLink from './ui/AppHeader/components/FirstNavLink';
import secondNavLink from './ui/AppHeader/components/SecondNavLink';
import RouterRoot from './ui/AppMain/components/RouterRoot';
import { errorRoute, garageRoute, winnersRoute } from './ui/Routes';

const router = new Router(RouterRoot, [firstNavLink, secondNavLink], errorRoute, [garageRoute, winnersRoute]);
const app = new AppComponent(AppFragment, router);
