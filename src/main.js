const navToggler = document.querySelector(".nav__toggler");
const navMenu = document.querySelector(".nav");

navToggler.addEventListener("click", (e) => {
    e.preventDefault();

    navToggler.classList.toggle("nav-isopen");
    navMenu.classList.toggle("nav-isopen");
});

const ankets = [
    "https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
    "https://masterpiecer-images.s3.yandex.net/3696fc0a43f311eea03136f52626dcc9:upscaled",
    "https://masterpiecer-images.s3.yandex.net/7fdfb9d178f011eebe30222e7fa838a6:upscaled",
    "https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled",
];

const likeBtn = document.querySelector(".like");
const dislikeBtn = document.querySelector(".dislike");
const anketaImg = document.querySelector(".card-fullscreen__img");

likeBtn.addEventListener("click", nextAnketa);
dislikeBtn.addEventListener("click", nextAnketa);

function nextAnketa() {
    const newAnketa = ankets.shift();
    anketaImg.setAttribute("src", newAnketa);
    ankets.push(newAnketa);
}