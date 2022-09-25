/**
 * A user from the system, ready to be dilivered to the view
 */
export class InUser {
  id = 0;
  name = "";
  username = "";
  email = "";
  address = "";
  zipcode = "";
  geo = {
    lat: "",
    lng: "",
  };
  phone = "";
  website = "";
  company = {
    name: "",
    catchPhrase: "",
    bs: "",
  };
  posts = [];

  constructor(
    id,
    name,
    username,
    email,
    address,
    zipcode,
    geo,
    phone,
    website,
    company,
    posts
  ) {
    this.id = id || this.id;
    this.name = name || this.name;
    this.username = username || this.username;
    this.email = email || this.email;
    this.address = address || this.address;
    this.zipcode = zipcode || this.zipcode;
    this.geo = geo || this.geo;
    this.phone = phone || this.phone;
    this.website = website || this.website;
    this.company = company || this.company;
    this.posts = posts || this.posts;
  }
}
