import {
  UNIDENTIFIED_ERROR,
  HTTP_ERROR,
  APPLICATION_ERROR,
} from "../models/transferObjects/errorTypes.js";

/**
 * Handler request error treatment in the system
 */
export class ErrorHandler {
  httpErros = {
    404: "Serviço fora de operação",
    500: "Desculpe, contate o suporte",
    0: "Desculpe, houve um erro desconhecido no serviço",
  };

  applicationErros = {
    // NOT IMPLEMENTED YET
    700: "Nenhum dado foi fornecido",
    0: "Desculpe, houve um erro desconhecido na aplicação",
  };

  constructor() {}

  handle(errorObj) {
    let errMsg = "";

    switch (errorObj.type) {
      case UNIDENTIFIED_ERROR:
        errMsg = "ERROR HANDLE NOT IMPLEMENTED YET!";
        break;

      case HTTP_ERROR:
        errMsg = this.httpErros[errorObj.code]
          ? this.httpErros[errorObj.code]
          : this.httpErros[0];
        break;

      case APPLICATION_ERROR:
        errMsg = this.applicationErros[errorObj.code]
          ? this.httpErros[errorObj.code]
          : this.httpErros[0];
        break;

      default:
        errMsg = "Algo está errado, por favor informar ao suporte";
        break;
    }

    errorObj.msg = errMsg;
  }
}
