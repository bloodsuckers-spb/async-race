import { AxiosHeaders } from 'axios';

import { Car } from '../../models/API';

export type Props = {
  data: Array<Car>;
  headers: AxiosHeaders;
};
