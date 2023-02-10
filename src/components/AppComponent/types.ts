import Router from '../AppRouter';
import AppStore from '../AppStore';

export type Props = {
  root: HTMLElement;
  fragment: DocumentFragment;
  router: Router;
  appStore: AppStore;
};
