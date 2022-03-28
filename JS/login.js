const tombol = document.querySelector(".btn"),
  inputEmail = document.querySelector("input[type='email']"),
  inputPassword = document.querySelector("input[type='password']");

tombol.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Email/password belum diisi");
  } else {
    window.location.href = "./product.html";
  }
});

tombol.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tombol.click();
  }
});
