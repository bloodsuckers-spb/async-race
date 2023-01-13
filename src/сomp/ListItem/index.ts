import Component from '../../base/Component';

class ListItem extends Component<'li'> {
  constructor(parent: Component<keyof HTMLElementTagNameMap>) {
    super({
      tagName: 'li',
      classList: ['list-item'],
      parent: parent.node,
    });
  }
}

export default ListItem;
