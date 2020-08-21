import { keyValueString } from "./interfaces";

export class RequestEntity {
  headers: keyValueString;

  constructor(headers: keyValueString) {
    this.headers = headers;
  }

  _getHeader() {
    return this.headers;
  }
}
