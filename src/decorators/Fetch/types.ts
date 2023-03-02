import { customEvents, fetchMethods } from '../../constants';

import { CustomEvents } from '../../enums';

export type FetchProps = {
  method: keyof typeof fetchMethods;
  eventName: keyof typeof customEvents;
  queryString: string;
  options?: Record<string, string>;
  emit: <T>(eventName: CustomEvents, params: T) => void;
};
