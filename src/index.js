import { Letter } from "./letter.js";

let users = [];
let showPostFromUser = -1;
let errorMsg = "";
let letter = new Letter();

/**
 * Busca usuários com seus respectivos posts
 * @param {Event} $event
 */
async function getUsersWithPosts($event) {
  try {
    users = await letter.get();
    error = "";
  } catch (error) {
    error = "ERROR TRANLATION NOT IMPLEMENTED YET!";
  }

  drawUsers();
  openAccordeon("contentSection");
}

/**
 * Apaga os usuários já buscados
 * @param {Event} $event Dom click event
 */
function cleanUsers($event) {
  users = [];
  drawUsers();
}

/**
 * Draw or erase all users in the screen, base on what is presente on "users"
 */
function drawUsers() {
  const userContainer = document.getElementById("usersContainer");
  let table = userContainer.getElementsByTagName("table")[0];

  // erasing everything first
  let trs = table.getElementsByTagName("tr");
  trs[1].hidden = false;
  for (let count = trs.length - 1; count >= 2; count--) {
    trs[count].remove();
  }

  if (errorMsg) {
    // code
  } else if (users.length > 0) {
    let stdtr = trs[1];
    stdtr.hidden = true;
    for (let user of users) {
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
      cloned.addEventListener("click", () => drawPosts(user));
      cloned.hidden = false;
      table.appendChild(cloned);
    }
  }
}

/**
 * Opens the given accordeon
 * @param {string} id The id of the Accordeon to be openned
 */
function openAccordeon(id) {
  document.getElementById(id).setAttribute("open", true);
}

/**
 * Draw the posts of an specific user. If called on the same user twice, hide it
 * @param {number} userId the id of the user of whom posts should be drawn
 */
function drawPosts(user) {
  const postSection = document.getElementById("postContentSection");

  // erase old posts
  const postBody = postSection.querySelectorAll("[postBod]");
  postBody[0].hidden = true;
  for (let count = postBody.length - 1; count >= 1; count--) {
    postBody[count].remove();
  }

  // hide the posts
  if (showPostFromUser == user.posts[0].userId) {
    postSection.hidden = true;
    showPostFromUser = -1;

    return;
  }

  // setting user name
  const userPostName = postSection.querySelectorAll("[userPostName]");
  userPostName[0].textContent = `Posts de ${user.username}:`;

  // build new posts
  postSection.hidden = false;
  showPostFromUser = user.posts[0].userId;
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
function init() {
  document
    .getElementById("showMe")
    .addEventListener("click", getUsersWithPosts);
  document.getElementById("clearIt").addEventListener("click", cleanUsers);
}

// callings
init();
