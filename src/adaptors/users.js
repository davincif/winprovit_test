import { InUser } from "../models/inObjects/inUser.js";
import { HttpTransferObj } from "../models/transferObjects/httpTransferObj.js";

export class AdaptorUser {
  constructor() {}

  /**
   * Get all the available users with the back-end
   */
  getAllUsers() {
    return this.#makeRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/users"
    ).then((resp) => {
      if (!resp.body || !Array.isArray(resp.body)) {
        return resp;
      }

      resp.body = resp.body.map(
        (user) =>
          new InUser(
            user.id,
            user.name,
            user.username,
            user.email,
            user.address,
            user.phone,
            user.website,
            user.company
          )
      );

      return resp;
    });
  }

  #makeRequest(method, path) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open(method, path);

      try {
        xhr.send();
      } catch (error) {
        reject(xhr);
      }

      xhr.onload = () => {
        const resp = new HttpTransferObj(
          xhr.status,
          xhr.statusText,
          JSON.parse(xhr.response)
        );
        if (resp.status != 200 && resp.status != 201) {
          reject(resp);
        } else {
          resolve(resp);
        }
      };
    });
  }
}
