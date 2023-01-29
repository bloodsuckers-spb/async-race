import Component from '../../../../base/Component';
import Tags from '../../../../enums/Tags';

const DetailsList = new Component<Tags.ul>({
  tagName: Tags.ul,
  classList: ['list'],
});

export default DetailsList;
