import Component from '../../base/Component';

import { Props } from './types';

class NavLink extends Component<'a'> {
  constructor({ textContent, href }: Props) {
    super({
      tagName: 'a',
      classList: ['nav-link'],
      nodeProps: {
        textContent,
        href,
      },
    });
  }
}

export default NavLink;
