function login() {

  let user =
  document.getElementById("username").value;

  let pass =
  document.getElementById("password").value;

  let savedUser =
  localStorage.getItem("user");

  let savedPass =
  localStorage.getItem("password");

  if(user === savedUser && pass === savedPass) {

    alert("Login Successful ✅");

    window.location.href = "index.html";

  }

  else {

    alert("Invalid Username or Password ❌");

  }

}