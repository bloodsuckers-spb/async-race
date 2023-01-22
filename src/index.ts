// UI
import initGarageLayout from './common/InitGarage';
import initWinnersLayout from './common/InitWinnersLayout';
import GarageView from './Layout/GarageView';
import WinnersView from './Layout/WinnersView';

// Components
import AppComponent from './components/AppComponent';

// Constants
import headerProps from './common/HeaderProps';
import { errorRoute, garageRoute, winnersRoute } from './routes';
import { skeleton, mainChildren } from './constants';

// styles
import './index.css';

const app = new AppComponent();
app.start({ skeleton, headerProps, mainChildren });
app.initRouter(errorRoute, [garageRoute, winnersRoute]);

initGarageLayout(GarageView);
initWinnersLayout(WinnersView);
app.getAppData();
