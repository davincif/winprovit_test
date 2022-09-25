/**
 * A post made by the user ready to be delivered to the view
 */
export class OutPost {
  id = 0;
  title = "";
  body = "";

  constructor(id, title, body) {
    this.id = id || this.id;
    this.title = title || this.title;
    this.body = body || this.body;
  }
}
