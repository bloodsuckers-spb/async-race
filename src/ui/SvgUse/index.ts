import SvgComponent from '../../base/SvgComponent';

import { xLink } from '../../constants';

import SVGTags from '../../enums/SVGTags';

import carSVG from '../../assets/car.svg';

class SvgUse extends SvgComponent<SVGTags.use> {
  constructor(protected readonly parent: SvgComponent<keyof SVGElementTagNameMap>) {
    super({
      tagName: SVGTags.use,
      classList: [],
      parent: parent.node,
    });
    this.node.setAttributeNS(xLink, 'xlink:href', `${carSVG}#car`);
  }
}

export default SvgUse;
