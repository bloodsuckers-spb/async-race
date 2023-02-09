import Router from '../../base/Router';

import AppStore from '../AppStore';

export type Props = {
  root: HTMLElement;
  fragment: DocumentFragment;
  router: Router;
  appStore: AppStore
};

export type Update = () => void;
