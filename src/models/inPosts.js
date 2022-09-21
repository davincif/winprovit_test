/**
 * A post made by the user as it comes from the back-end
 */
export class InPost {
  id = 0;
  title = "";
  body = "";

  constructor(id, title, body) {
    this.id = id || this.id;
    this.title = title || this.title;
    this.body = body || this.body;
  }
}
