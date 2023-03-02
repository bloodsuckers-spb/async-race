import Component from '../../base/Component';

import Tags from '../../enums/Tags';

import Props from './types';

import styles from './index.css';

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
