const Toggle = document.querySelector(".toggle");
const NavList = document.querySelector(".navbar-list");
const Btn = document.querySelector(".btn-container");

Toggle.addEventListener("click", (e) => {
  NavList.classList.toggle("toggle-responsive");
  Btn.classList.toggle("toggle-responsive");
});
