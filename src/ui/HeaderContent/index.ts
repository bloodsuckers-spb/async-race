import Component from '../../base/Component';
import Nav from '../HeaderNav';

import Tags from '../../enums/Tags';

const HeaderContent = new Component<Tags.div>({
  tagName: Tags.div,
  classList: ['content'],
});

HeaderContent.append(Nav);

export default HeaderContent;
