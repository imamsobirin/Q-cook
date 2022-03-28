function footer(elemen) {
  elemen.innerHTML = `
  <div class="container footer">
        <div class="logo-footer">
          <span><a href="#home">Q-cook</a></span>
        </div>
        <div class="footer-list help">
          <p>Bantuan</p>
          <ul>
            <li><a href="#">Pusat Bantuan</a></li>
            <li><a href="#">Syarat & Ketentuan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div class="social footer-list ">
          <p>Ikuti kami</p>
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook-square"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter-square"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram-square"></i></a></li>
          </ul>
        </div>
      </div>
    `;

  document.querySelector(".help p").addEventListener("click", () => {
    if (document.querySelector(".help ul").style.display == "block") {
      document.querySelector(".help ul").style.display = "none";
    } else {
      document.querySelector(".help ul").style.display = "block";
    }
  });
}

export default footer;
