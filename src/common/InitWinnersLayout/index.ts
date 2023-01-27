// // Components & UI
// import Component from '../../base/Component';
// import Heading from '../../components/Heading';
// import Title from '../../components/Title';
// import table from '../../ui/Table';
// import thead from '../../ui/TableHead';
// import TableBody from '../../components/TableBody';
// import TableRow from '../../components/TableRow';
// import TableHeadCell from '../../components/TableHeadCell';

// // Constants
// import HeadingKeys from '../../enums/HeadingKeys';
// import TitleKeys from '../../enums/TitleKeys';
// import Views from '../../enums/Views';
// import Tags from '../../enums/Tags';
// import { tableHeadersProps } from '../../constants';

// const initWinnersLayout = (view: Component<Tags.div>) => {
//   const heading = new Heading(view, Views.winners, HeadingKeys.winners);
//   const title = new Title(view, TitleKeys.garage);
//   view.append(table);
//   table.append(thead);
//   const tableBody = new TableBody(table);
//   const tableHeaderRow = new TableRow(thead);
//   const tableHeaders = tableHeadersProps.map((prop) => new TableHeadCell(tableHeaderRow, prop));
//   return { heading, title, tableHeaderRow, tableBody, tableHeaders };
// };

// export default initWinnersLayout;
