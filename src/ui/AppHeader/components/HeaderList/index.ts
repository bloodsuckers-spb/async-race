import Component from '../../../../base/Component';

import fistlistItem from '../FirstlistItem';
import secondListItem from '../SecondListItem';

import Tags from '../../../../enums/Tags';

import styles from './index.css';

const { list } = styles;

const HeaderList = new Component<Tags.ul>({
  tagName: Tags.ul,
  classList: [list],
  children: [fistlistItem, secondListItem],
});

export default HeaderList;
