/**
 * A post made by the user ready to be delivered to the view
 */
export class InPost {
  id = 0;
  userId = 0;
  title = "";
  body = "";

  constructor(id, userId, title, body) {
    this.id = id || this.id;
    this.userId = userId || this.userId;
    this.title = title || this.title;
    this.body = body || this.body;
  }
}
