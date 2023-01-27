import AppHeader from '../AppHeader';
import AppMain from '../AppMain';

const AppFragment = new DocumentFragment();

const children = [AppHeader, AppMain];

AppFragment.append(...children.map((component) => component.node));

export default AppFragment;
