import { Listener, EventMap } from '../../models';

abstract class EventEmitter {
  listeners: EventMap = {};
  on(eventName: keyof EventMap, listener: Listener) {
    this.listeners[eventName].push(listener);
  }
  off(eventName: keyof EventMap, listener: Listener) {
    this.listeners[eventName] = this.listeners[eventName].filter((cb) => cb !== listener);
  }
  emit<T>(eventName: keyof EventMap, ...params: Array<T>) {
    this.listeners[eventName].forEach((listener) => listener(...params));
  }
}

export default EventEmitter;
