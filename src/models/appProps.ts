import Component from '../base/Component';
import AppComponent from '../components/AppComponent';
import Tags from '../enums/Tags';

export type InitAppProps = {
  app: AppComponent;
  header: Component<Tags.header>;
  main: Component<Tags.main>;
};
