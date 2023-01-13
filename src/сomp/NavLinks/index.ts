import Component from '../../base/Component';

import { Props } from './types';

class NavLink extends Component<'a'> {
  constructor({ parent, nodeProps }: Props) {
    super({
      tagName: 'a',
      classList: ['nav-link'],
      nodeProps,
      parent: parent.node,
    });
  }
}

export default NavLink;
