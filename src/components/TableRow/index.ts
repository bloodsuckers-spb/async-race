import Component from '../../base/Component';

import Tags from '../../enums/Tags';

class TableRow extends Component<Tags.tr> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: Tags.tr,
      classList: ['table-row'],
      parent: parent.node,
    });
  }
}

export default TableRow;
