// toggling active state to button

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((buttie) => {
      buttie.classList.remove("active");
    })
    btn.classList.add("active");
  })
});

// dom elements changed
const name = document.getElementById("name");
const image = document.getElementById("image");
const bio = document.getElementById("bio");
const role = document.getElementById("role");

// first btn
const firstBtn = document.getElementById("0");

const page = "https://raw.githubusercontent.com/Hanka8/FM-space-tourism-website/main/data.json";

const getData = async (what) => {
  const data = await fetch(page);
  const dataJson = await data.json();
  const crew = dataJson.crew[what];
  name.textContent = crew.name;
  image.src = `css${crew.images.png.slice(1)}`;
  bio.textContent = crew.bio;
  role.textContent = crew.role;
}


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getData(btn.id);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  getData(0);
  firstBtn.classList.add("active");
})
