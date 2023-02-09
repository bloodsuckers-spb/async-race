import Router from '../../base/Router';

export type Props = {
  root: HTMLElement;
  fragment: DocumentFragment;
  router: Router;
};

export type Update = () => void;
