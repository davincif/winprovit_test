import { PortUser } from "../ports/users.js";

export class CoreUser {
  userPort;

  constructor() {
    this.userPort = new PortUser();
  }

  /**
   * Get all the available users and their respective posts
   */
  async getAllUsersAndPosts() {
    let resp = await this.userPort.getAllUsers();
    let users = resp.body;
    resp = await this.userPort.getAllPosts();
    let posts = resp.body;

    // since we cannot (theorically) garantee the posts are always going to come in order...
    // hasing posts
    let hasedPosts = {};
    for (let post of posts) {
      if (!hasedPosts[post.userId]) {
        hasedPosts[post.userId] = [];
      }

      hasedPosts[post.userId].push(post);
    }

    // feeding the users with their respective the posts
    for (let user of users) {
      user.posts = hasedPosts[user.id];
    }

    return users;
  }
}
