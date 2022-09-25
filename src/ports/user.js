import { AdaptorUser } from "../adaptors/users.js";
import { OutUser } from "../models/outObjects/outUser.js";
import { OutPost } from "../models/outObjects/outPost.js";

export class PortUser {
  adaptor;

  constructor() {
    this.adaptor = new AdaptorUser();
  }

  /**
   * Get all the available users with the adaptors and transform in understanda
   * object for the system to process
   */
  async getAllUsers() {
    // error cases should be treated by the caller
    const resp = await this.adaptor.getAllUsers();

    resp.body = resp.body.map(
      (inUser) =>
        new OutUser(
          inUser.id,
          inUser.name,
          inUser.username,
          inUser.email,
          `${inUser.address.street}, ${inUser.address.suite} at ${inUser.address.city}`,
          inUser.address.zipcode,
          inUser.address.geo,
          inUser.phone,
          inUser.website,
          inUser.company,
          []
        )
    );

    return resp;
  }

  /**
   * Get all the available posts from all users with the adaptors and transform
   * in understanda object for the system to process
   */
  async getAllPosts() {
    // error cases should be treated by the caller
    const resp = await this.adaptor.getAllPosts();

    resp.body = resp.body.map(
      (post) => new OutPost(post.id, post.uderId, post.title, post.body)
    );

    return resp;
  }
}
