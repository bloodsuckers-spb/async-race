import Router from '../AppRouter';
import appState from '../AppState';

export type Props = {
  root: HTMLElement;
  fragment: DocumentFragment;
  router: Router;
  appState: appState;
};
