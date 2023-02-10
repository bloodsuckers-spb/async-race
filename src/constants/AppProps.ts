import AppState from '../components/AppState';

import AppFragment from '../ui/AppFragment';

import AppRouter from './AppRouter';

const AppProps = {
  root: document.body,
  fragment: AppFragment,
  router: AppRouter,
  appState: new AppState(),
};

export default AppProps;
