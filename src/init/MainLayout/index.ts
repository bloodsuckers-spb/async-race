import AppComponent from '../../components/AppComponent';
import Main from '../../components/Main';
import BoundingComponent from '../../components/BoundingComponent';
import ContentComponent from '../../components/ContentComponent';

const MainLayout = (app: AppComponent) => {
  const main = new Main(app);
  const container = new BoundingComponent(main);
  const root = new ContentComponent(container);
  return { root };
};

export default MainLayout;
