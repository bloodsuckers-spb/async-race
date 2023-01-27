import SvgComponent from '../../base/SvgComponent';

import carSVG from '../../assets/car.svg';

import SVGTags from '../../enums/SVGTags';

import { xLink } from '../../constants';

class SvgUse extends SvgComponent<SVGTags.use> {
  constructor(readonly parent: SvgComponent<keyof SVGElementTagNameMap>) {
    super({
      tagName: SVGTags.use,
      classList: [],
      parent: parent.node,
    });
    this.node.setAttributeNS(xLink, 'xlink:href', `${carSVG}#car`);
  }
}

export default SvgUse;
