/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse } from 'axios';

import { CustomEvents } from '../../enums';

import { LoadDecorator } from '../../models/API';

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
