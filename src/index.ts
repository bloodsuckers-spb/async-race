import AppComponent from './components/AppComponent';
import { skeleton, mainChildren } from './constants';
import headerProps from './common/HeaderProps';
import { errorRoute, garageRoute, winnersRoute } from './routes';

import initGarageLayout from './common/InitGarage';
import initWinnersLayout from './common/InitWinnersLayout';
import GarageView from './Layout/GarageView';
import WinnersView from './Layout/WinnersView';

import './index.css';

const app = new AppComponent();
app.start({ skeleton, headerProps, mainChildren });
app.initRouter(errorRoute, [garageRoute, winnersRoute]);

// Temp
initGarageLayout(GarageView);
initWinnersLayout(WinnersView);
app.getData();
