/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse } from 'axios';

import CustomEvents from '../../enums/CustomEvents';

import { LoadDecorator } from '../../models/API';

// eslint-disable-next-line arrow-body-style
const Loader = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T =>
    class extends Constructor {
      protected load<U>({ method, queryString, eventName, options = {}, cb }: LoadDecorator): void {
        axios[method](queryString, options)
          .then((response: AxiosResponse<U>) => cb(CustomEvents[eventName], response))
          .catch((error: Error) => console.log(error.message));
      }
    };
};

export default Loader;
