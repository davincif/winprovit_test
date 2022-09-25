import { CoreUser } from "./core/users.js";
// const CoreUser = require('./core/users');
// const CoreUser = require("./core/users.js");

const coreUser = new CoreUser();

let users = [];
let errorMsg = '';

// "Public" functions
/**
 * Busca usuários com seus respectivos posts
 * @param {Event} $event
 */
async function getUsersWithPosts($event) {
  try {
    users = await coreUser.getAllUsersAndPosts();
    error = '';
  } catch (error) {
    error = 'jkahsdasd'
  }

  drawUsers();
}

/**
 * Apaga os usuários já buscados
 * @param {Event} $event Dom click event
 */
function cleanUsers($event) {
  console.log("cleanUsers");
  users = [];
}

// "Internal" functions
function drawUsers() {

}

function init() {
  document
    .getElementById("showMe")
    .addEventListener("click", getUsersWithPosts);
  document.getElementById("clearIt").addEventListener("click", cleanUsers);
}

// callings
init();
