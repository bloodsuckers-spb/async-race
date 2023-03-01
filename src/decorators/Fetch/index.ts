/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import { CustomEvents } from '../../enums';

const fetchMethods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
} as const;

const customEvents = {
  GetWinners: 'GetWinners',
} as const;

type FetchProps = {
  method: keyof typeof fetchMethods;
  eventName: keyof typeof customEvents;
  queryString: string;
  options?: Record<string, string>;
  emit: <T>(eventName: CustomEvents, params: T) => void;
};

export interface AbstractFetch {
  fetch: (props: FetchProps) => void;
  fetchCountedData: (props: FetchProps) => void;
  awaitedFetch: <R>(props: Pick<FetchProps, 'method' | 'queryString'>) => Promise<R>;
}

const AsyncFetch = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T => {
    const totalCount = 'X-Total-Count';
    const asyncFetch = ({ method, queryString }: Pick<FetchProps, 'method' | 'queryString'>): Promise<Response> => {
      return fetch(queryString, {
        method,
      });
    };
    return class extends Constructor {
      protected fetch({ method, queryString, eventName, emit }: FetchProps): void {
        asyncFetch({ method, queryString })
          .then((response) => response.json())
          .then((response) => emit(CustomEvents[eventName], response))
          .catch(console.error);
      }

      protected fetchCountedData({ method, queryString, eventName, emit }: FetchProps): void {
        asyncFetch({ method, queryString })
          .then(async (response) => {
            const data = await response.json();
            const count = response.headers.get(totalCount);
            return { data, count };
          })
          .then((response) => emit(CustomEvents[eventName], response))
          .catch(console.error);
      }

      protected async awaitedFetch<R>({
        method,
        queryString,
      }: Pick<FetchProps, 'method' | 'queryString'>): Promise<R> {
        const response = await asyncFetch({ method, queryString });
        return response.json();
      }
    };
  };
};

export default AsyncFetch;
