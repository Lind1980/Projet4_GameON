function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");
const modal_confirmation = document.querySelector(".modal_confirmation");
const closeConfirmation = document.querySelector(".close_confirmation");
const closeBtn = document.querySelector(".btn_confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}

// For closing the modal
function closeModal() {
  modalbg.style.display = "none";
  body.style.overflow = "initial";
}

// Modal confirmation form
modal_confirmation.style.display = "none";
closeConfirmation.addEventListener("click", () => {
  modal_confirmation.style.display = "none";
})

// To confirm the form
function confirmMessage() {
  closeModal()
  modalbg.style.display = "none";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
  modal_confirmation.style.display = "block";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}
window.confirmMessage = confirmMessage

// For closing the modal confirmation
closeBtn.addEventListener("click", () => {
  modal_confirmation.style.display = "none";
})