import header from '../Layout/Header';
import main from '../Layout/Main';
import boundingBox from '../Layout/MainBounding';
import contentBox from '../Layout/RoutingRoot';

export const skeleton = { header, main };
export const mainChildren = { boundingBox, contentBox };

export const errorMessage = 'Type of props is not valid';

export const SVGNamespaceURI = 'http://www.w3.org/2000/svg';
export const xLink = 'http://www.w3.org/1999/xlink';

export const tableHeadersProps = ['№', 'Car', 'Name', 'Wins', 'Time'];
