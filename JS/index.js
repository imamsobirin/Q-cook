import menu from "../data/dataMenu.js";
import card from "./card.js";
import footer from "./footer.js";

// menampilkan footer
footer(document.getElementById("footer"));

const menuWrapper = document.querySelector(".menu-wrapper"),
  burgerMenu = document.querySelector(".burger-menu"),
  navMenu = document.querySelector(".nav-list"),
  showMore = document.querySelector(".show-more-btn"),
  homeButton = document.querySelector(".home-button");

// menampilkan menu card
for (let i = 0; i <= 4; i++) {
  card(menu[i], menuWrapper);
}
// even listener ke halaman login dari tombol showmore
showMore.addEventListener("click", (e) => {
  window.location.href = "./login.html";
});

// even listener ke halaman login dari tombol home
homeButton.addEventListener("click", (e) => {
  window.location.href = "./login.html";
});

// even listener menampilkan/menyembunyikan menu
burgerMenu.addEventListener("click", () => {
  if (navMenu.style.display == "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});
