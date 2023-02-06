import SvgComponent from '../../base/SvgComponent';

import carSVG from '../../assets/car.svg';

import { xLink } from '../../constants';

import SVGTags from '../../enums/SVGTags';

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
