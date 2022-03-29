import { navbar } from "./navbar.js";
import footer from "./footer.js";
import menu from "../data/dataMenu.js";

let jumlahBeli = document.querySelector(".product-number");
const totalHarga = document.querySelector(".total-count"),
  tambahJumlah = document.querySelector(".tambah-jumlah"),
  kurangJumlah = document.querySelector(".kurang-jumlah");

let jumlah = 1;
const harga = 24000;
jumlahBeli.value = jumlah;
totalHarga.innerHTML = `Rp. ${jumlah * harga}`;

tambahJumlah.onclick = function () {
  jumlah += 1;
  jumlahBeli.value = jumlah;
  totalHarga.innerHTML = `Rp. ${jumlah * harga}`;
};
kurangJumlah.onclick = function () {
  if (jumlah >= 2) {
    jumlah -= 1;
    jumlahBeli.value = jumlah;
    totalHarga.innerHTML = `Rp. ${jumlah * harga}`;
  }
};

jumlahBeli.onchange = function () {
  jumlahBeli.value = jumlah;
};
// menampilkan navbar
navbar(document.getElementById("navbar"));
footer(document.getElementById("footer"));
