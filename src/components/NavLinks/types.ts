import Component from '../../base/Component';

export type Props = {
  nodeProps: {
    textContent: string;
    href: string;
  };
  parent: Component<keyof HTMLElementTagNameMap>;
};
