import { AdaptorUser } from "../adaptors/users.js";

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
    const req = await this.adaptor.getAllUsers();
    console.log("req", req);
    // let resp =
    return req;
  }
}
