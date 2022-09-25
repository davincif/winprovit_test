import { Letter } from "./letter.js";

export class IndexComponent {
  users = [];
  showPostFromUser = -1;
  errorMsg = "";
  letter = new Letter();

  constructor() {
    this.#init();
  }

  /**
   * Busca usuários com seus respectivos posts
   * @param {Event} $event
   */
  async getUsersWithPosts($event) {
    let error = "";
    try {
      this.users = await this.letter.get();
    } catch (err) {
      error = err.error.msg;
    }

    this.drawError(error);
    this.drawUsers();
    this.openAccordeon("contentSection");
  }

  /**
   * Apaga os usuários já buscados
   * @param {Event} $event Dom click event
   */
  cleanUsers($event) {
    this.users = [];
    this.errorMsg = "";
    this.drawUsers();
    this.drawError();
  }

  /**
   * Draw or erase all users in the screen, base on what is presente on "users"
   */
  drawUsers() {
    const userContainer = document.getElementById("usersContainer");
    let table = userContainer.getElementsByTagName("table")[0];

    // erasing everything first
    let trs = table.getElementsByTagName("tr");
    trs[1].hidden = false;
    for (let count = trs.length - 1; count >= 2; count--) {
      trs[count].remove();
    }

    // is there something to be drawn?
    if (this.users.length == 0) {
      return;
    }

    let stdtr = trs[1];
    stdtr.hidden = true;
    for (let user of this.users) {
      let cloned = stdtr.cloneNode(true);
      let clonedCells = cloned.getElementsByTagName("td");
      clonedCells[0].textContent = user.id;
      clonedCells[1].textContent = user.name;
      clonedCells[2].textContent = user.username;
      clonedCells[3].textContent = user.email;
      clonedCells[4].textContent = user.address;
      clonedCells[5].textContent = user.zipcode;
      clonedCells[6].textContent = `(${user.geo.lat}, ${user.geo.lng})`;
      clonedCells[7].textContent = user.phone;
      clonedCells[8].textContent = user.website;
      clonedCells[9].textContent = user.company.name;
      cloned.addEventListener("click", () => this.drawPosts(user));
      cloned.hidden = false;
      table.appendChild(cloned);
    }
  }

  /**
   * Draw the error msg at the screen, or remove it from there if no error is present
   * @param {string} msg error msg to be drown on the screen
   */
  drawError(msg) {
    // spearing process
    if (this.errorMsg == msg) {
      return;
    }

    this.errorMsg = msg;
    const errorSection = document.getElementById("errorSection");
    errorSection.getElementsByTagName("p")[0].textContent = this.errorMsg;
    if (this.errorMsg) {
      errorSection.hidden = false;
    } else {
      errorSection.hidden = true;
    }
  }

  /**
   * Opens the given accordeon
   * @param {string} id The id of the Accordeon to be openned
   */
  openAccordeon(id) {
    document.getElementById(id).setAttribute("open", true);
  }

  /**
   * Draw the posts of an specific user. If called on the same user twice, hide it
   * @param {number} userId the id of the user of whom posts should be drawn
   */
  drawPosts(user) {
    const postSection = document.getElementById("postContentSection");

    // erase old posts
    const postBody = postSection.querySelectorAll("[postBod]");
    postBody[0].hidden = true;
    for (let count = postBody.length - 1; count >= 1; count--) {
      postBody[count].remove();
    }

    // hide the posts
    if (this.showPostFromUser == user.posts[0].userId) {
      postSection.hidden = true;
      this.showPostFromUser = -1;

      return;
    }

    // setting user name
    const userPostName = postSection.querySelectorAll("[userPostName]");
    userPostName[0].textContent = `Posts de ${user.username}:`;

    // build new posts
    postSection.hidden = false;
    this.showPostFromUser = user.posts[0].userId;
    for (let post of user.posts) {
      let newPost = postBody[0].cloneNode(true);
      postBody[0].hidden = false;
      let paragraphs = postBody[0].getElementsByTagName("p");
      paragraphs[0].textContent = post.title;
      paragraphs[1].textContent = post.body;
      postSection.appendChild(newPost);
    }
  }

  /**
   * Make some initial preparation for this vire to work as expected
   */
  #init() {
    document
      .getElementById("showMe")
      .addEventListener("click", () => this.getUsersWithPosts());
    document.getElementById("clearIt").addEventListener("click", () => this.cleanUsers());
  }
}

const indexComponent = new IndexComponent();
