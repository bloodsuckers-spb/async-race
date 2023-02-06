import Component from '../../base/Component';

import Routes from '../../enums/Routes';
import Tags from '../../enums/Tags';

const createRoutes = (key: Routes, view: Component<Tags.div>) => ({ [key]: view });

export default createRoutes;
