import boundingBox from '../../Layout/BoundingComponent';
import contentBox from '../../Layout/ContentComponent';
import list from '../../Layout/List';
import nav from '../../Layout/Nav';
import fistlistItem from '../../Layout/FirstlistItem';
import secondListItem from '../../Layout/SecondListItem';
import firstNavLink from '../../Layout/FirstNavLink';
import secondNavLink from '../../Layout/SecondNavLink';

const headerProps = {
  boundingBox,
  contentBox,
  nav,
  list,
  listItems: [fistlistItem, secondListItem],
  navLinks: [firstNavLink, secondNavLink],
};

export default headerProps;
