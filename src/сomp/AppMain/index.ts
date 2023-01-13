import AppComponent from '../App';
import Main from '../Main';
import BoundingComponent from '../BoundingComponent';
import ContentComponent from '../ContentComponent';

const AppMain = (app: AppComponent) => {
  const main = new Main(app);
  const container = new BoundingComponent(main);
  const root = new ContentComponent(container);
  return { root };
};

export default AppMain;
