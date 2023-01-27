import Component from '../../base/Component';
import Tags from '../../enums/Tags';

const table = new Component<Tags.table>({
  tagName: Tags.table,
  classList: ['table'],
});

export default table;
