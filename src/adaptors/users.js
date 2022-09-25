import { InPost } from "../models/inObjects/inPosts.js";
import { InUser } from "../models/inObjects/inUser.js";
import { HttpTransferObj } from "../models/transferObjects/httpTransferObj.js";

export class AdaptorUser {
  constructor() {}

  /**
   * Get all the available users in the back-end
   */
  getAllUsers() {
    return this.#makeRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/users"
    ).then((resp) => {
      // error cases should be treated by the caller
      if (
        resp.status != 200 ||
        resp.status != 201 ||
        !resp.body ||
        !Array.isArray(resp.body)
      ) {
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

  /**
   * Get all the available posts of all users in the back-end
   */
  getAllPosts() {
    return this.#makeRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    ).then((resp) => {
      if (!resp.body || !Array.isArray(resp.body)) {
        return resp;
      }

      resp.body = resp.body.map(
        (post) => new InPost(post.id, post.userId, post.title, post.body)
      );

      return resp;
    });
  }

  /**
   * Make a HTTP request and return the info
   * @param {string} method HTTP method to be used in the request
   * @param {string} path endpoint to be used in the request
   * @returns a HttpTransferObj
   */
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
