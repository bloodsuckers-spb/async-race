/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { Listener, EventMap } from '../../models';

abstract class EventEmitter {
  static listeners: EventMap = {};
  on(eventName: keyof EventMap, listener: Listener) {
    if (!EventEmitter.listeners.hasOwnProperty(eventName)) {
      EventEmitter.listeners[eventName] = [];
    }
    EventEmitter.listeners[eventName].push(listener);
  }
  off(eventName: keyof EventMap, listener: Listener) {
    EventEmitter.listeners[eventName] = EventEmitter.listeners[eventName].filter((cb) => cb !== listener);
  }

  emit<T>(eventName: keyof EventMap, params: T) {
    EventEmitter.listeners[eventName].forEach((listener) => listener(params));
  }
}

export default EventEmitter;
