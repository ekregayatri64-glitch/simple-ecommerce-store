console.log("JS connected");

document.addEventListener("DOMContentLoaded", function () {

  let count = localStorage.getItem("cartCount") || 0;
  let total = localStorage.getItem("cartTotal") || 0;

  document.getElementById("cart").innerText =
    "Cart Items: " + count;

  document.getElementById("total").innerText =
    "Total Price: ₹" + total;

  let loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      console.log("clicked");
      alert("Login button clicked");
    });
  }

});

function addToCart(price) {

  let count = localStorage.getItem("cartCount") || 0;
  let total = localStorage.getItem("cartTotal") || 0;

  count++;
  total = Number(total) + price;

  localStorage.setItem("cartCount", count);
  localStorage.setItem("cartTotal", total);

  document.getElementById("cart").innerText =
    "Cart Items: " + count;

  document.getElementById("total").innerText =
    "Total Price: ₹" + total;
}
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
    } else {
        alert("Login successful");
    }
}
let username = localStorage.getItem("user");

if(username) {

  document.getElementById("welcome").innerText =
  "Welcome " + username + " 👋";

}
function logout() {

  localStorage.removeItem("user");

  alert("Logged Out");

  window.location.href = "login.html";

}
let cartCount =
localStorage.getItem("cartCount") || 0;

let totalPrice =
localStorage.getItem("cartTotal") || 0;

document.getElementById("cart").innerText =
"Cart Items: " + cartCount;

document.getElementById("total").innerText =
"Total Price: ₹" + totalPrice;

function addToCart(price) {

  cartCount++;

  totalPrice =
  Number(totalPrice) + price;

  localStorage.setItem("cartCount", cartCount);

  localStorage.setItem("cartTotal", totalPrice);

  document.getElementById("cart").innerText =
  "Cart Items: " + cartCount;

  document.getElementById("total").innerText =
  "Total Price: ₹" + totalPrice;

}
function viewDetails(name, price) {

  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);

  window.location.href = "details.html";
}