/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */

import { EventMap, Listener } from '../../models';

abstract class EventEmitter {
  protected static listeners: Partial<EventMap> = {};
  protected on(eventName: keyof EventMap, listener: Listener): void {
    if (!EventEmitter.listeners.hasOwnProperty(eventName)) {
      EventEmitter.listeners[eventName] = [];
    }
    EventEmitter.listeners[eventName]?.push(listener);
  }
  protected off(eventName: keyof EventMap, listener: Listener): void {
    EventEmitter.listeners[eventName] = EventEmitter.listeners[eventName]?.filter((cb) => cb !== listener);
  }

  protected emit<T>(eventName: keyof EventMap, params: T): void {
    EventEmitter.listeners[eventName]?.forEach((listener) => listener(params));
  }
}

export default EventEmitter;
