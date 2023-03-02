import Routes from '../../enums/Routes';

import createRoutes from '../CreateRoutes';
import ErrorView from '../ErrorView';
import GarageView from '../Garage';
import WinnersView from '../Winners';

export const errorRoute = createRoutes(Routes.page404, ErrorView);
export const garageRoute = createRoutes(Routes.garage, GarageView);
export const winnersRoute = createRoutes(Routes.winners, WinnersView);
