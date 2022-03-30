import { navbar } from "./navbar.js";
import footer from "./footer.js";
import menu from "../data/dataMenu.js";

const jumlahBeli = document.querySelector(".product-number"),
  totalHarga = document.querySelector(".total-count"),
  tambahJumlah = document.querySelector(".tambah-jumlah"),
  kurangJumlah = document.querySelector(".kurang-jumlah"),
  productImage = document.querySelector(".product-img img"),
  productTitle = document.querySelector(".product-title"),
  productPrice = document.querySelector(".product-price span"),
  productDescription = document.querySelector(".product-description"),
  include = document.querySelector(".include");

// mengambil id menu
let urlParam = new URLSearchParams(window.location.search);
let id = urlParam.get("id");

const menuDisplay = menu.filter((menu) => menu.id == id);
const { name, price, content, description, image } = menuDisplay[0];

// mengisi tampilan
productImage.src = image;
productTitle.innerHTML = name;
productPrice.innerHTML = price;
productDescription.innerHTML = description;
content.forEach((bahan) => {
  include.innerHTML += `<li>${bahan}</li>`;
});
// merubah title document
document.title = name;

let jumlah = 1;
jumlahBeli.value = jumlah;
totalHarga.innerHTML = `Rp. ${jumlah * price}`;

tambahJumlah.onclick = function () {
  jumlah += 1;
  jumlahBeli.value = jumlah;
  totalHarga.innerHTML = `Rp. ${jumlah * price}`;
};
kurangJumlah.onclick = function () {
  if (jumlah >= 2) {
    jumlah -= 1;
    jumlahBeli.value = jumlah;
    totalHarga.innerHTML = `Rp. ${jumlah * price}`;
  }
};

jumlahBeli.onchange = function () {
  jumlahBeli.value = jumlah;
};
// menampilkan navbar
navbar(document.getElementById("navbar"));
footer(document.getElementById("footer"));
