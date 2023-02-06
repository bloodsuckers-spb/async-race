import { SVGNamespaceURI } from '../../constants';

import { SvgComponentProps } from '../../models';

class SvgComponent<T extends keyof SVGElementTagNameMap> {
  public node: SVGElementTagNameMap[T];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor({ tagName, classList = [], nodeProps = {}, parent }: SvgComponentProps<T>) {
    this.node = document.createElementNS(SVGNamespaceURI, tagName);
    this.node.classList.add('icon');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  protected addChildren = <U extends keyof SVGElementTagNameMap>(...children: Array<SvgComponent<U>>): void => {
    this.node.append(...children.map((component) => component.node));
  };
}

export default SvgComponent;
