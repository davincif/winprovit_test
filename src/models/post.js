/**
 * Um post feito por um usuário do sistema
 */
export class Post {
  id = 0;
  title = "";
  body = "";

  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
