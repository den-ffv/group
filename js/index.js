const btnBurgerMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".menubox")
btnBurgerMenu.addEventListener("click", () => {
  menu.classList.toggle("menubox-open")
})