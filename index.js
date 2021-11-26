const btnToggle = document.querySelector(".nav__toggle-btn");
const element = document.querySelector(".nav__els");

btnToggle.addEventListener("click", () => {
  element.classList.toggle("active");
});
