import Component from '../../base/Component';

import Routes from '../../enums/Routes';
import Tags from '../../enums/Tags';

import { AppView } from '../../models';

const createRoutes = (key: Routes, view: Component<Tags.div>): AppView => ({ [key]: view });

export default createRoutes;
