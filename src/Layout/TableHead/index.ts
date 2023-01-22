import Component from '../../base/Component';
import Tags from '../../enums/Tags';

const thead = new Component<Tags.thead>({
  tagName: Tags.thead,
  classList: ['thead'],
});

export default thead;
