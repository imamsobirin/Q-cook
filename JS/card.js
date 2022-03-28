const card = (item, elemen) => {
  let name, price, image, id, servings;
  ({ id, name, price, image, servings } = item);
  elemen.innerHTML += `
  <div class="menu-card ${id}">
  <div class="menu-cover ${id}">
    <img src=${image} alt="">
  </div>
  <div class="menu-description ${id}">
    <h3 class="menu-name h3">${name}</h3>
    <p class="servings">${servings} porsi</p>
    <p class="menu-price">Rp. ${price}<span class="menu-pack">/pack</span></p>
    <button class="btn buy-button">
      Beli
    </button>
    <button class="btn add-to-cart-button">+ Keranjang</button>
  </div>
</div>
  `;
};

export default card;
