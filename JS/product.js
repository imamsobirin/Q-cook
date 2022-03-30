import menu from "../data/dataMenu.js";
import card from "./card.js";
import { navbar } from "./navbar.js";
import footer from "./footer.js";

navbar(document.getElementById("navbar"));
footer(document.getElementById("footer"));

const menuWrapper = document.querySelector(".menu-wrapper"),
  category = document.querySelectorAll(".category ul li"),
  input = document.querySelector(".search-input"),
  searchButton = document.querySelector(".search-button");

let categoryArr = [];
let displayArr = [];

//menambah even listener pada tombol search
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  const searchValue = input.value;
  let searchArr;
  searchArr = searchValue.toLowerCase().split(" ");

  // mendapat hasil pencarian / displayArr
  menu.forEach((item) => {
    let num = 0;
    searchArr.forEach((category) => {
      if (item.ingredients.includes(category) || item.name.toLowerCase().split(" ").includes(category)) {
        num += 1;
      }
    });
    if (num > 0) {
      displayArr.push(item);
    }
  });

  //menampilkan hasil pencarian
  if (displayArr.length == 0) {
    menuWrapper.innerHTML = "<p>Tidak ada hasil</p>";
  } else {
    menuWrapper.innerHTML = "";
    displayArr.forEach((item) => {
      card(item, menuWrapper);
    });
  }
  category.forEach((item) => {
    item.classList.remove("category-active");
  });

  if (input.value === "") {
    menuWrapper.innerHTML = "";
    menu.forEach((item) => {
      card(item, menuWrapper);
    });
  }

  //reset pencarian
  input.value = "";
  displayArr = [];
});

//mengaktifkan tombol search dengan enter
if (!input.value === "") {
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      searchButton.click();
    }
  });
}

//hasil pencarian berdasar kategori
category.forEach((item) => {
  item.addEventListener("click", () => {
    categoryArr = [];
    //menambahkan class active
    item.classList.toggle("category-active");
    const categoryContent = document.querySelectorAll(".category-active");

    //mendapat array kategori
    categoryContent.forEach((content) => {
      categoryArr.push(content.textContent.toLowerCase());
    });

    //looping menu yang akan ditampilkan / mendapat displayArr
    menu.forEach((item) => {
      let num = 0;
      categoryArr.forEach((category) => {
        if (item.category.includes(category)) {
          num += 1;
        }
      });
      if (num > 0) {
        displayArr.push(item);
      }
    });

    //menampilkan hasil pencarian
    menuWrapper.innerHTML = "";
    displayArr.forEach((item) => {
      card(item, menuWrapper);
    });
    if (categoryArr.length === 0) {
      menu.forEach((item) => {
        card(item, menuWrapper);
      });
    }
    displayArr = [];
  });
});

//menampilkan semua menu jika tidak ada kategori dipilih
if (categoryArr.length === 0) {
  menu.forEach((item) => {
    card(item, menuWrapper);
  });
}

menuWrapper.addEventListener("click", (e) => {
  let menuId = getMenuId(e);
  window.location.href = "./product-detail.html?id=" + menuId;
});

//mendapat product id
const getMenuId = (e) => {
  let id = e.target.parentElement.classList[1];
  return id;
};
