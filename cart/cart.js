import product from "./product.js";
var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

display(cartItems);

function display(array) {
  document.getElementById("showProducts").innerHTML = "";

  array.forEach((element, index) => {
    document.getElementById("showProducts").innerHTML += product(
      element,
      index
    );
  });
}