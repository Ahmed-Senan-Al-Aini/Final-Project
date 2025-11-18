function f_login(event) {
  event.preventDefault();
  const username = document.getElementById('userss').value;
  const password = document.getElementById('passwords').value;
  
  if (username && password) {
    alert(`🫱 Welcome, ${username} Registered Successful. 🫲`);
    window.location.href = 'pages/product.html';
    document.querySelector('form').reset();
  }
}

function f_register(event) {
  event.preventDefault();
  const username = document.getElementById('r_user').value;
  const password = document.getElementById('r_password').value;
  
  if (username && password) {
    alert(`👋🏻 Welcome, ${username} Login Successful. 👋🏻`);
    window.location.href = 'pages/product.html';
    document.querySelector('form').reset();
  }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

/* login pop*/

var modal = document.getElementById('myModal');
var img = document.getElementById('login-page');
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const btn = document.getElementById("butn");

function login() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  btn.style.left = "0%";
}

function register() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  btn.style.left = "50%";
}

/**/


//!@^#^#^#&#&#&#&#&&#&#&#&#&#&##&#&#&#