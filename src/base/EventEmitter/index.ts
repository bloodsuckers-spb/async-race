/* eslint-disable class-methods-use-this */
import { Listener } from './types';

import CustomEvents from '../../enums/CustomEvents';

abstract class EventEmitter {
  protected static listeners = new Map<CustomEvents, Set<Listener>>();
  protected on(eventName: CustomEvents, listener: Listener): void {
    if (!EventEmitter.listeners.has(eventName)) {
      EventEmitter.listeners.set(eventName, new Set());
    }
    const observers = EventEmitter.listeners.get(eventName);
    if (!observers) {
      throw new Error('');
    }
    EventEmitter.listeners.set(eventName, observers.add(listener));
  }

  protected off(eventName: CustomEvents, listener: Listener): void {
    const observers = EventEmitter.listeners.get(eventName);
    if (!observers) {
      throw new Error('');
    }
    EventEmitter.listeners.set(eventName, new Set([...observers].filter((cb) => cb !== listener)));
  }

  protected emit<T>(eventName: CustomEvents, params: T): void {
    const observers = EventEmitter.listeners.get(eventName);
    observers?.forEach((listener) => listener(params));
  }
}

export default EventEmitter;
