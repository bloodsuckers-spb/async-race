abstract class Loader {
  constructor(private baseLink: string) {
    // this.store = store;
    // миграция на ТС
  }
  // <T>
  getResp() {
    // this.load();
    console.log(this);
  }

  // options, endpoint
  createUrl() {
    console.log(this);
  }

  // method, endpoint, callback, options = {}
  load() {
    // <T>
    console.log(this);
  }

  errorHandler() {
    console.log(this);
  }
}

// class AppLoader extends Loader {
// constructor() {

// }
//   get () {
//     this.load('GET')
//   }
//   create() {
//     this.load('POST')
//   }
//   delete() {
//     this.load('delete')
//   }
//    Patch() {
//     this.load('Patch')
//   }
// }

// const EngineLoader = {
//   // startEngine
//   // Stop
//   // Drive
// };

// const car = new AppLoader()

// const car = {
//   get (id) {
//     this.load('GET', {id})
//   }
// }

// const cars = {
//   getCars
//   getCar
//   deleteCar
//   createCar
//   updateCar
// };

// const winners = {
//   get winners() {
//    axios.get('url').then(store.changeWinners('updateWinners'))
// }
//
// }
//   createWinner
//   deleteWinner
// };

export default Loader;
