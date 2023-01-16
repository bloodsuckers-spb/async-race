import axios, { AxiosResponse } from 'axios';

import { Load } from '../../models/API';
import CustomEvents from '../../enums/CustomEvents';

// `${this.baseLink}/garage?_page=1&_limit=7`
// `${this.baseLink}/winners?_page=1&_limit=10`

const load = <T>({ method, queryString, eventName, cb }: Load): void => {
  axios[method](queryString)
    .then((response: AxiosResponse<T>) => cb(CustomEvents[eventName], response))
    .catch((error: Error) => console.log(error.message));
};

export default load;
