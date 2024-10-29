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

const card = document.querySelector(".mouse-pressed__effect");

const size = {
    w: 0,
    h: 0,
};

window.addEventListener("load", () => {
    size.w = card.offsetWidth;
    size.h = card.offsetHeight;
});

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const oX = e.clientX - rect.left;
    const oY = e.clientY - rect.top;

    const rotateX = (oY / size.h - 0.5) * 10;
    const rotateY = -(oX / size.w - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Сбрасываем трансформацию при выходе курсора за пределы карточки
card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
});

