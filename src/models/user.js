/**
 * Um usuário do sistema
 */
export class User {
  id = 0;
  name = "";
  username = "";
  email = "";
  address = "";
  phone = "";
  website = "";
  company = "";
  posts = [];

  constructor(
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    posts
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
    this.posts = posts;
  }
}
