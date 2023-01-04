import Loader from '../Loader';

class LoaderService extends Loader {
  constructor() {
    super('');
  }
  get() {
    // GET
    this.load();
  }
  create() {
    // 'POST'
    this.load();
  }
  delete() {
    // 'delete'
    this.load();
  }
  Patch() {
    // 'Patch'
    this.load();
  }
}

export default LoaderService;
