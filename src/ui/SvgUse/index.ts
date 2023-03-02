import SvgComponent from '../../base/SvgComponent';

import SVGTags from '../../enums/SVGTags';

import carSVG from '../../assets/car.svg';

class SvgUse extends SvgComponent<SVGTags.use> {
  protected static readonly xLink = 'http://www.w3.org/1999/xlink';
  constructor(protected readonly parent: SvgComponent<keyof SVGElementTagNameMap>) {
    super({
      tagName: SVGTags.use,
      classList: [],
      parent: parent.node,
    });
    this.node.setAttributeNS(SvgUse.xLink, 'xlink:href', `${carSVG}#car`);
  }
}

export default SvgUse;
