import { SVGNamespaceURI } from '../../constants';
import { SvgComponentProps } from '../../models';

// import SvgUse from '../../components/SvgUse';

class SvgComponent<T extends keyof SVGElementTagNameMap> {
  readonly node: SVGElementTagNameMap[T];
  constructor({ tagName, classList = [], nodeProps = {}, parent }: SvgComponentProps<T>) {
    this.node = document.createElementNS(SVGNamespaceURI, tagName);
    this.node.classList.add(classList.join(' '));
    Object.assign(this.node, nodeProps);
    parent?.append(this.node);
  }
}

export default SvgComponent;
