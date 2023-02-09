import AppStore from '../components/AppStore';

import AppFragment from '../ui/AppFragment';

import AppRouter from './AppRouter';

const AppProps = {
  root: document.body,
  fragment: AppFragment,
  router: AppRouter,
  appStore: new AppStore(),
};

export default AppProps;
