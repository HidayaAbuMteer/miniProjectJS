
//Signup

const myForm = document.querySelector("#form-signup");
const inputs = document.querySelectorAll(".signup");

inputs.forEach(input => {
  const error = document.createElement("span");
  error.className = "error";
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.style.marginLeft = "5px";
  input.after(error);
});

const nameRegex  = /^[a-zA-Z]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if (myForm) {
  myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    inputs.forEach(input => {
      const error = input.nextElementSibling;
      error.textContent = "";

      if (input.value.trim() === "") {
        error.textContent = "Required";
        valid = false;
        return;
      }

      if (input.id === "firstName" && !nameRegex.test(input.value.trim())) {
        error.textContent = "First name must be at least 3 letters (no numbers or symbols).";
        valid = false;
      }

      if (input.id === "lastName" && !nameRegex.test(input.value.trim())) {
        error.textContent = "Last name must be at least 3 letters (no numbers or symbols).";
        valid = false;
      }

      if (input.id === "emailAddress" && !emailRegex.test(input.value.trim())) {
        error.textContent = "Invalid email format.";
        valid = false;
      }

      if (input.id === "pass" && !passRegex.test(input.value)) {
        error.textContent = "Password must be 8+ chars, with uppercase, lowercase and number.";
        valid = false;
      }

      if (input.id === "confpass") {
        const pass = document.getElementById("pass").value;
        if (input.value.trim() === "") {
          error.textContent = "Required";
          valid = false;
        } else if (input.value !== pass) {
          error.textContent = "Passwords do not match.";
          valid = false;
        }
      }
    });

    if (valid) {
      const newUser = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("emailAddress").value,
        pass: document.getElementById("pass").value
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful!");
      window.location.href = "login.html";
    }
  });
}


// Login

const loginForm = document.getElementById("form-login");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("emailLogin").value.trim();
    const pass = document.getElementById("passLogin").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.pass === pass); // هنا "pass"

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "welcome.html";
  });
}