/* eslint-disable @typescript-eslint/no-unused-vars */

import AppComponent from './components/AppComponent';
import AppFragment from './ui/AppFragment';
import firstNavLink from './ui/AppHeader/components/FirstNavLink';
import Router from './base/Router';
import RouterRoot from './ui/AppMain/components/RouterRoot';
import secondNavLink from './ui/AppHeader/components/SecondNavLink';

import { errorRoute, garageRoute, winnersRoute } from './ui/Routes';

import './index.css';

const router = new Router(RouterRoot, [firstNavLink, secondNavLink], errorRoute, [garageRoute, winnersRoute]);
const app = new AppComponent(AppFragment, router);
