const cartButton = document.getElementById("shopping");
const cartDiv = document.getElementById("empty_cart_container");

cartButton.addEventListener("click", () => {
  cartDiv.style.transform = "translateX(150%)";
});
