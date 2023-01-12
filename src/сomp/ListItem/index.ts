import Component from '../../base/Component';

class ListItem extends Component<'li'> {
  constructor(children: Array<Component<keyof HTMLElementTagNameMap>>) {
    super({
      tagName: 'li',
      classList: ['list-item'],
    });
    this.node.append(...children.map((child) => child.node));
  }
}

export default ListItem;
