const burger = document.querySelector('#burger');
const menu = document.querySelector('.nav_info');


burger.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
})