import Component from '../../base/Component';

import styles from './index.css';

import Props from './types';

import Tags from '../../enums/Tags';

const { link } = styles;

class NavLink extends Component<Tags.a> {
  constructor(nodeProps: Props) {
    super({
      tagName: Tags.a,
      classList: [link],
      nodeProps,
    });
  }
}

export default NavLink;
