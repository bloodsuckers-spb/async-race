import Router from '../base/Router';

import firstNavLink from '../ui/AppHeader/components/FirstNavLink';
import secondNavLink from '../ui/AppHeader/components/SecondNavLink';
import RouterRoot from '../ui/AppMain/components/RouterRoot';

import { errorRoute, garageRoute, winnersRoute } from '../ui/Routes';

const AppRouter = new Router({
  root: RouterRoot,
  navLinks: [firstNavLink, secondNavLink],
  errorView: errorRoute,
  views: [garageRoute, winnersRoute],
});

export default AppRouter;
