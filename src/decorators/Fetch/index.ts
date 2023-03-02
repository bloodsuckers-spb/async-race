/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */

import { FetchProps } from './types';

import { CustomEvents } from '../../enums';

// baseLink = 'https://async-race-api-d3de.onrender.com',

const AsyncFetch = () => {
  return <T extends { new (...args: any[]): {} }>(Constructor: T): T => {
    const totalCount = 'X-Total-Count';
    const asyncFetch = ({ method, queryString }: Pick<FetchProps, 'method' | 'queryString'>): Promise<Response> => {
      return fetch(queryString, {
        method,
      });
    };
    return class extends Constructor {
      protected get BASE_URL(): string {
        return 'http://127.0.0.1:3000';
      }
      protected get GARAGE_URL(): string {
        return `${this.BASE_URL}/garage`;
      }
      protected get WINNERS_URL(): string {
        return `${this.BASE_URL}/winners`;
      }
      protected get ENGINE_URL(): string {
        return `${this.BASE_URL}/engine`;
      }
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

      protected async awaitedFetch<R>({ method, queryString }: Pick<FetchProps, 'method' | 'queryString'>): Promise<R> {
        const response = await asyncFetch({ method, queryString });
        return response.json();
      }
    };
  };
};

export default AsyncFetch;
