import Component from '../../base/Component';

import AppSubtitle from '../../components/AppSubtitle';
import { nextBtn, prevBtn } from '../../components/BtnFactory';

import Tags from '../../enums/Tags';

import styles from './index.css';

const paginationBox = new Component<Tags.div>({
  tagName: Tags.div,
  classList: [styles.pagination],
  children: [prevBtn, AppSubtitle, nextBtn],
});

export default paginationBox;
