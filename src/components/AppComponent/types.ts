import Component from '../../base/Component';

import Tags from '../../enums/Tags';

export type Skeleton = {
  header: Component<Tags.header>;
  main: Component<Tags.main>;
};

export type HeaderChildren = {
  boundingBox: Component<Tags.div>;
  contentBox: Component<Tags.div>;
  nav: Component<Tags.nav>;
  list: Component<Tags.ul>;
  listItems: Array<Component<Tags.li>>;
  navLinks: Array<Component<Tags.a>>;
};

export type MainChildren = {
  boundingBox: Component<Tags.div>;
  contentBox: Component<Tags.div>;
};

export type InitProps = {
  skeleton: Skeleton;
  headerProps: HeaderChildren;
  mainChildren: MainChildren;
};
