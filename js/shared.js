const menuBtn = document.querySelector(".nav__btn");
const mobileMenu = document.querySelector(".nav__menu");


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  mobileMenu.classList.toggle("nav__menu--shown");
  mobileMenu.classList.toggle("nav__menu--hidden");
});
