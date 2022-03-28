export function navbar(elemen) {
  elemen.innerHTML = `
    <div class="container">
        <div class="logo">
          <span><a href="./index.html">Q-cook</a></span>
        </div>
        <div class="search">
          <form action="">
            <input type="text" class="search-input" />
            <button class="btn search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div class="account-details">
          <div class="cart">
            <p><i class="fa-solid fa-cart-shopping"></i></p>
          </div>
          <div class="account">
            <p><i class="fa-solid fa-user"></i></p>
            <div id="tampilkan" class="account-menu">
              <ul>
                <li>
                  <a href="#" class="account-link"> Profil<i class="fa-regular fa-user"></i></a>
                </li>
                <li>
                  <a href="#" class="account-link">Pengaturan<i class="fa-solid fa-gear"></i></a>
                </li>
                <li>
                  <a href="#" class="account-link">Keluar<i class="fa-solid fa-arrow-right-from-bracket"></i> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    `;

  const account = document.querySelector(".account p"),
    accountMenu = document.querySelector(".account .account-menu");
  account.addEventListener("click", () => {
    if (accountMenu.style.display == "none") {
      account.style.color = "black";
      accountMenu.style.display = "block";
    } else {
      accountMenu.style.display = "none";
      account.style.color = "var(--line)";
    }
  });
}
