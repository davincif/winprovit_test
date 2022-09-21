import { CoreUser } from "./core/users.js";
// const CoreUser = require('./core/users');
// const CoreUser = require("./core/users.js");

const coreUser = new CoreUser();

let users = [];

function init() {
  document
    .getElementById("showMe")
    .addEventListener("click", getUsersWithPosts);
  document.getElementById("clearIt").addEventListener("click", cleanUsers);
}

/**
 * Busca usuários com seus respectivos posts
 * @param {Event} $event
 */
function getUsersWithPosts($event) {
  console.log("**************");
  coreUser.getAllUsersAndPosts();
}

/**
 * Apaga os usuários já buscados
 * @param {Event} $event
 */
function cleanUsers($event) {
  console.log("cleanUsers");
  users = [];
}

init();
