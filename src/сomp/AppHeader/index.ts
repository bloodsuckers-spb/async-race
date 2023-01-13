import AppComponent from '../App';
import NavLink from '../NavLinks';
import ListItem from '../ListItem';
import List from '../List';
import Nav from '../Nav';
import ContentComponent from '../ContentComponent';
import BoundingComponent from '../BoundingComponent';
import Header from '../Header';

import Routes from '../../enums/Routes';

const AppHeader = (app: AppComponent) => {
  const header = new Header(app);
  const headerBounding = new BoundingComponent(header);
  const headerContent = new ContentComponent(headerBounding);
  const nav = new Nav(headerContent);
  const list = new List(nav);
  const FirstListItem = new ListItem(list);
  const SecondListItem = new ListItem(list);
  const FirstNavLink = new NavLink({
    parent: FirstListItem,
    nodeProps: { href: Routes.garage, textContent: 'Garage' },
  });
  const SecondNavLink = new NavLink({
    parent: SecondListItem,
    nodeProps: { href: Routes.winners, textContent: 'Winners' },
  });

  return { FirstNavLink, SecondNavLink };
};

export default AppHeader;
