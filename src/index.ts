import AppComponent from './components/AppComponent';

import AppFragment from './ui/AppFragment';

import AppRouter from './constants/AppRouter';

import './global.css';

(() =>
  new AppComponent({
    root: document.body,
    fragment: AppFragment,
    router: AppRouter,
  }))();
