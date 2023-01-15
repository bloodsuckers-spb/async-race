import SvgComponent from '../../base/SvgComponent';
import SVGTags from '../../enums/SVGTags';

import carSVG from '../../assets/carSVG.svg';

class SvgUse extends SvgComponent<SVGTags.use> {
  constructor(readonly parent: SvgComponent<keyof SVGElementTagNameMap>) {
    super({
      tagName: SVGTags.use,
      classList: [],
      nodeProps: {
        'xlink:href': `href="${carSVG}#car"`,
      },
      parent: parent.node,
    });
  }
}

export default SvgUse;
