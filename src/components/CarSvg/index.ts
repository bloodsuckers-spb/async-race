import SvgComponent from '../../base/SvgComponent';
import Component from '../../base/Component';
import SVGTags from '../../enums/SVGTags';
import SvgUse from '../SvgUse';

class CarSvg extends SvgComponent<SVGTags.svg> {
  use: SvgUse;
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, protected color = '#4212a1') {
    super({
      tagName: SVGTags.svg,
      classList: ['icon'],
      nodeProps: {
        style: `fill:${color}`,
      },
      parent: parent.node,
    });
    this.use = new SvgUse(this);
  }
}

export default CarSvg;
