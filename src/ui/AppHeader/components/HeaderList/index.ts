import Component from '../../../../base/Component';
import fistlistItem from '../FirstlistItem';
import secondListItem from '../SecondListItem';

import styles from './index.css';

import Tags from '../../../../enums/Tags';

const { list } = styles;

const HeaderList = new Component<Tags.ul>({
  tagName: Tags.ul,
  classList: [list],
});

HeaderList.append(fistlistItem, secondListItem);

export default HeaderList;
