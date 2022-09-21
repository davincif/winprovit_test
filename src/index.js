// console.log(">>>>>>>");
// let asd = document.querySelectorAll("[click]");
// // let asd = document.querySelectorAll(new RegExp("[click=\"\"]"));
// console.log("asd", asd);
// console.log("asd[0]", asd[0]);
// console.log("asd[0].getAttribute", asd[0].getAttribute("click"));

// let ass = new IndexPresenter();
// console.log("//", ass["test"]);
// window.addEventListener("click", ass["test"]);

export class IndexPresenter {
  constructor() {}

  test($event) {
    console.log($event);
    return "====";
  }
}
