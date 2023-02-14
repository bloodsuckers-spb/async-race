import Component from '../../../../base/Component';

import AppHeading from '../../../../components/AppHeading';

import paginationBox from '../../../PaginationBox';
import Nav from '../HeaderNav';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { content } = styles;

const HeaderContent = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [content],
  children: [Nav, AppHeading, paginationBox],
});

export default HeaderContent;
