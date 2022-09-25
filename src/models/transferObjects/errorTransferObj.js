import { UNIDENTIFIED_ERROR } from "./errorTypes.js";

export class ErrorTransferObj {
  code;
  type = UNIDENTIFIED_ERROR;
  msg = "";

  constructor(code, type, msg) {
    this.code = code || this.code;
    this.type = type || this.type;
    this.msg = msg || this.msg;
  }
}
