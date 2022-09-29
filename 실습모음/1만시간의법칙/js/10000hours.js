// js file

const goBtn = document.querySelector(".btn-go");
const modal = document.querySelector(".cont-modal");
const endBtn = document.querySelector("btn-end");
const modalClass = modal.classList.contains("ir");

goBtn.addEventListener("click", function () {
  modal.classList.remove("ir");
});
