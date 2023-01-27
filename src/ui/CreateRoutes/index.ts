import Routes from '../../enums/Routes';
import Component from '../../base/Component';
import Tags from '../../enums/Tags';

const createRoutes = (key: Routes, view: Component<Tags.div>) => ({ [key]: view });

export default createRoutes;
