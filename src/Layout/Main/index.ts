import Component from '../../base/Component';

import Tags from '../../enums/Tags';

const main = new Component<Tags.main>({
  tagName: Tags.main,
  classList: ['main'],
});

export default main;
