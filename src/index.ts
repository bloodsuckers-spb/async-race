/* eslint-disable @typescript-eslint/no-unused-vars */
// UI
// import initGarageLayout from './common/InitGarage';
// import initWinnersLayout from './common/InitWinnersLayout';
// import GarageView from './Layout/GarageView';
// import WinnersView from './Layout/WinnersView';

// Components
import AppComponent from './components/AppComponent';
import Router from './base/Router';
import AppFragment from './ui/AppFragment';
import RouterRoot from './ui/RouterRoot';
import firstNavLink from './ui/FirstNavLink';
import secondNavLink from './ui/SecondNavLink';

// Constants
import { errorRoute, garageRoute, winnersRoute } from './routes';

// styles
import './index.css';

const router = new Router(RouterRoot, [firstNavLink, secondNavLink], errorRoute, [garageRoute, winnersRoute]);
const app = new AppComponent(AppFragment, router);

// initWinnersLayout(WinnersView);
// app.getAppData();
