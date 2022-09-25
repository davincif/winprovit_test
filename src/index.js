import { CoreUser } from "./core/users.js";
// const CoreUser = require('./core/users');
// const CoreUser = require("./core/users.js");

const coreUser = new CoreUser();

let users = [];
let errorMsg = "";

// "Public" functions
/**
 * Busca usuários com seus respectivos posts
 * @param {Event} $event
 */
async function getUsersWithPosts($event) {
  try {
    users = await coreUser.getAllUsersAndPosts();
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

// "Internal" functions
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
      cloned.hidden = false;
      table.appendChild(cloned);
    }
  }
}

function openAccordeon(id) {
  document.getElementById(id).setAttribute("open", true);
}

function init() {
  document
    .getElementById("showMe")
    .addEventListener("click", getUsersWithPosts);
  document.getElementById("clearIt").addEventListener("click", cleanUsers);
}

// callings
init();
