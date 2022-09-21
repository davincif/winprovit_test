/**
 * A user from the system as it comes from the backend
 */
export class InUser {
  id = 0;
  name = "";
  username = "";
  email = "";
  address = {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  };
  phone = "";
  website = "";
  company = {
    name: "",
    catchPhrase: "",
    bs: "",
  };

  constructor(id, name, username, email, address, phone, website, company) {
    this.id = id || this.id;
    this.name = name || this.name;
    this.username = username || this.username;
    this.email = email || this.email;
    this.address = address || this.address;
    this.phone = phone || this.phone;
    this.website = website || this.website;
    this.company = company || this.company;
  }
}
