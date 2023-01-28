import ErrorView from '../ErrorView';
import GarageView from '../Garage';
import WinnersView from '../Winners';

import createRoutes from '../CreateRoutes';

import Routes from '../../enums/Routes';

export const errorRoute = createRoutes(Routes.page404, ErrorView);
export const garageRoute = createRoutes(Routes.garage, GarageView);
export const winnersRoute = createRoutes(Routes.winners, WinnersView);