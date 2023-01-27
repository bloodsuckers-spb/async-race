import ErrorView from '../ui/ErrorView';
import GarageView from '../ui/Garage';
import WinnersView from '../ui/Winners';

import createRoutes from '../ui/CreateRoutes';

import Routes from '../enums/Routes';

export const errorRoute = createRoutes(Routes.page404, ErrorView);
export const garageRoute = createRoutes(Routes.garage, GarageView);
export const winnersRoute = createRoutes(Routes.winners, WinnersView);
