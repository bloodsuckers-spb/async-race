import Component from '../../base/Component';
import Tags from '../../enums/Tags';

class Pagination extends Component<Tags.div> {
  constructor(protected prev: Component<Tags.button>, protected next: Component<Tags.button>) {
    super({
      tagName: Tags.div,
      classList: ['pagination'],
    });
    this.append(prev, next);
    this.prev.node.disabled = true;
  }
}

export default Pagination;
