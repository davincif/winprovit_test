import { CoreUser } from "./core/users.js";

/**
 * This object was created only to attend the challenge's requirements, but in
 * the curret architecture it is not really needed.
 */
export class Letter {
  #coreUser = new CoreUser();

  constructor() {}

  /**
   * Busca usuários com seus respectivos posts
   * @param {Event} $event
   */
  async get($event) {
    return await this.#coreUser.getAllUsersAndPosts();
  }
}
