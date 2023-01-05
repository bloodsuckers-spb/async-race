import Component from '../../base/Component';

import navLinksProps from '../../constants/navLinks';

const navLinks = navLinksProps.map((navLink) => new Component(navLink));

export default navLinks;
