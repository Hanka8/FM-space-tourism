// toggling active state to button

const planetBtns = document.querySelectorAll(".nav__menu__btn");

planetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    planetBtns.forEach((buttie) => {
      buttie.classList.remove("active");
    })
    btn.classList.add("active");
  })
});

// dom elements changed
const name = document.getElementById("name");
const image = document.getElementById("image");
const decription = document.getElementById("description");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel");

// first btn
const firstBtn = document.getElementById("0");

const page = "https://raw.githubusercontent.com/Hanka8/FM-space-tourism-website/main/data.json";

const getData = async (what) => {
  const data = await fetch(page);
  const dataJson = await data.json();
  const destinations = dataJson.destinations[what];
  name.textContent = destinations.name;
  image.src = `css${destinations.images.png.slice(1)}`;
  description.textContent = destinations.description;
  distance.textContent = destinations.distance;
  travel.textContent = destinations.travel;
}

planetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getData(btn.id);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  getData(0);
  firstBtn.classList.add("active");
})
