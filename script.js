let contactForm = document.querySelector(".contact-form");
let contactContainer = document.querySelector(".contact-container");
// let contactBtn = document.querySelector("#submit-btn");

console.log(contactForm);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactContainer.classList.add("hidden");
  document.querySelector(".success").classList.remove("hidden");
});
