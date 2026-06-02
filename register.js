function register() {

  let user =
  document.getElementById("username").value;

  let email =
  document.getElementById("email").value;

  let pass =
  document.getElementById("password").value;

  if(user === "" || email === "" || pass === "") {

    alert("Please fill all fields");

  }

  else {

    // save data
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    alert("Registration Successful ✅");

    window.location.href = "login.html";

  }

}