import { PortUser } from "../ports/user.js";

export class CoreUser {
  userPort

  constructor() {
    this.userPort = new PortUser();
  }

  /**
   * Get all the available users and their respective posts
   */
  getAllUsersAndPosts() {
    this.userPort.getAllUsers();
  }
}
