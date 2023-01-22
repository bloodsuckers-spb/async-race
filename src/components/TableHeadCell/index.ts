import Component from '../../base/Component';

import Tags from '../../enums/Tags';

class TableHeadCell extends Component<Tags.th> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>, text: string) {
    super({
      tagName: Tags.th,
      classList: ['th'],
      nodeProps: {
        textContent: text,
      },
      parent: parent.node,
    });
  }
}

export default TableHeadCell;
