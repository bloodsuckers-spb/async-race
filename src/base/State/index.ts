/* eslint-disable class-methods-use-this */
import EventEmitter from '../EventEmitter';

abstract class State extends EventEmitter {
  static cars = new Set();
  static winners = new Set();
  updateCars() {
    console.log('updateCars in state');
  }
}

export default State;
