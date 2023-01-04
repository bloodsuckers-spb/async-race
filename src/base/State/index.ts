import EventEmitter from '../EventEmitter';

class State extends EventEmitter {
  winners = [];
  constructor() {
    super();
    this.winners = [];
  }
  changeWinners() {
    // EventEmitter.triger(event)
    console.log(this);
  }
}

export default State;
