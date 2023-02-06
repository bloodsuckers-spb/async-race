/* eslint-disable @typescript-eslint/no-unused-vars */

import Router from './base/Router';

import AppComponent from './components/AppComponent';
import firstNavLink from './ui/AppHeader/components/FirstNavLink';
import secondNavLink from './ui/AppHeader/components/SecondNavLink';
import RouterRoot from './ui/AppMain/components/RouterRoot';

import AppFragment from './ui/AppFragment';
import { errorRoute, garageRoute, winnersRoute } from './ui/Routes';

import './global.css';

const router = new Router(RouterRoot, [firstNavLink, secondNavLink], errorRoute, [garageRoute, winnersRoute]);
const app = new AppComponent(AppFragment, router);
