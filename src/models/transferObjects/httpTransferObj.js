/**
 * A standardized object to be responded by all http request
 */
 export class HttpTransferObj {
  // HTTP status code
  status = 0

  // possible error text
  msg = ''

  // custom type (the content of the request return)
  body

  constructor(status, msg, body) {
    this.status = status || this.status;
    this.msg = msg || this.msg;
    this.body = body || this.body;
  }
}
