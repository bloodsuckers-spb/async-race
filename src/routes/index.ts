import ErrorView from '../Layout/ErrorView';
import GarageView from '../Layout/GarageView';
import WinnersView from '../Layout/WinnersView';

import createRoutes from '../common/CreateRoutes';

import Routes from '../enums/Routes';

export const errorRoute = createRoutes(Routes.page404, ErrorView);
export const garageRoute = createRoutes(Routes.garage, GarageView);
export const winnersRoute = createRoutes(Routes.winners, WinnersView);
