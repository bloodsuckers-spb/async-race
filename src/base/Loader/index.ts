/* eslint-disable class-methods-use-this */

import axios from 'axios';

import EventEmitter from '../EventEmitter';

class Loader extends EventEmitter {
  garagePage = 1;
  constructor(private readonly baseLink: string) {
    super();
  }
  // <T>
  getResp() {
    this.load();
  }

  // options, endpoint
  createUrl() {}

  // method, callback, options = {}
  load() {
    // <T>
  }

  errorHandler() {}

  public getCars = () => {
    axios
      .get(`${this.baseLink}/garage/?_page=1&_limit=7`)
      .then((response) => this.emit('updateCars', response))
      .catch((error: Error) => console.log(error.message));
  };
}

export default Loader;
