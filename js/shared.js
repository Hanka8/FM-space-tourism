const menuBtn = document.querySelector(".nav__btn");
const mobileMenu = document.querySelector(".nav__menu");


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  mobileMenu.classList.toggle("nav__menu--shown");
  mobileMenu.classList.toggle("nav__menu--hidden");
});

// toggling active state to button

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((buttie) => {
      buttie.classList.remove("active");
    })
    btn.classList.add("active");
  })
});
