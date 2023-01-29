import Component from '../../base/Component';
import Tags from '../../enums/Tags';

class Details extends Component<Tags.details> {
  constructor(summary: Component<Tags.summary>, list: Component<Tags.ul>) {
    super({
      tagName: Tags.details,
      classList: ['details'],
    });
    this.append(summary, list);
  }
}

export default Details;
