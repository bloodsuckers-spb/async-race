/* eslint-disable max-len */
import Component from '../../base/Component';
import SvgComponent from '../../base/SvgComponent';

import SvgUse from '../SvgUse';

import SVGTags from '../../enums/SVGTags';

import { HashType } from '../../models';

class CarSvg extends SvgComponent<SVGTags.svg> {
  protected readonly use: SvgUse;
  constructor(protected readonly parent: Component<keyof HTMLElementTagNameMap>, protected color: HashType) {
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
