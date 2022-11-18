export default class ErrorRepository {
  constructor() {
    // this.listError = new Map ([
    //     [100, 'Continue'],
    //     [102, 'Processing'],
    //     [200, 'Ok'],
    //     [201, 'Created'],
    //     [202, 'Accepted'],
    // ])
    this.listError = new Map();
  }

  translate(NumberOfError) {
    if (!this.listError.has(NumberOfError)) {
      return `${NumberOfError} is unknown error`;
    }
    return this.listError.get(NumberOfError);
  }

  add(number, descpiption) {
    if (!this.listError.has(number)) {
      this.listError.set(number, descpiption);
      return true;
    }
    return false;
  }

  showkyes() {
    return [...this.listError.keys()];
  }
}
