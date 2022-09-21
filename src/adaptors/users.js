export class AdaptorUser {
  constructor() {}

  /**
   * Get all the available users with the back-end
   */
  getAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      console.log('AdaptorUser', resp);

      return resp;
    });
  }
}
