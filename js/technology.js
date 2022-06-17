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
const image = document.getElementById("img");
const imageSmall = document.getElementById("imgSmall");
const description = document.getElementById("description");

// first btn
const firstBtn = document.getElementById("0");

const page = "https://raw.githubusercontent.com/Hanka8/FM-space-tourism-website/main/data.json";

const getData = async (what) => {
  const data = await fetch(page);
  const dataJson = await data.json();
  const technology = dataJson.technology[what];
  name.textContent = technology.name;
  image.src = `css${technology.images.portrait.slice(1)}`;
  imageSmall.srcset = `css${technology.images.landscape.slice(1)}`;
  description.textContent = technology.description;
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
