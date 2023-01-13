import AppComponent from '../../сomp/AppComponent';
import Main from '../../сomp/Main';
import BoundingComponent from '../../сomp/BoundingComponent';
import ContentComponent from '../../сomp/ContentComponent';

const MainLayout = (app: AppComponent) => {
  const main = new Main(app);
  const container = new BoundingComponent(main);
  const root = new ContentComponent(container);
  return { root };
};

export default MainLayout;
