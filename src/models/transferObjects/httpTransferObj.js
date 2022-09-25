/**
 * A standardized object to be responded by all http request
 */
 export class HttpTransferObj {
  /**
   * HTTP status code
   */
  status = 0

  /**
   * possible error text
   */
  msg = ''

  /**
   * custom type (the content of the request return)
   */
  body

  /**
   * Error object, when one happens
   */
  error

  constructor(status, msg, body, error) {
    this.status = status || this.status;
    this.msg = msg || this.msg;
    this.body = body || this.body;
    this.error = error || this.error;
  }
}
