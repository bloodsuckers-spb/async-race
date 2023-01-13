import EventEmitter from '../EventEmitter';

class State extends EventEmitter {
  cars = [];
  constructor() {
    super();
    this.cars = [];
  }
  changeWinners() {
    // EventEmitter.triger(event)
    console.log(this);
  }
}

export default State;
