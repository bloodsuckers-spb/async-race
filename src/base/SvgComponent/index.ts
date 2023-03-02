import { SvgComponentProps } from '../../models';

class SvgComponent<T extends keyof SVGElementTagNameMap> {
  protected static readonly namespaceURI = 'http://www.w3.org/2000/svg';
  public node: SVGElementTagNameMap[T];
  constructor({ tagName, nodeProps = {}, parent }: SvgComponentProps<T>) {
    this.node = document.createElementNS(SvgComponent.namespaceURI, tagName);
    this.node.classList.add('icon');
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }

  protected addChildren = <U extends keyof SVGElementTagNameMap>(...children: Array<SvgComponent<U>>): void => {
    this.node.append(...children.map((component) => component.node));
  };
}

export default SvgComponent;
