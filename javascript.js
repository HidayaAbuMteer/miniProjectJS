


// let myForm = document.querySelector("#form-signup");
// let inputs = document.querySelectorAll(".signup");


// inputs.forEach(function(input) {
//   let error = document.createElement("span");
//   error.className = "error";
//   error.style.color = "red";
//   error.style.fontSize = "12px";
//   error.style.marginLeft = "5px";
//   input.after(error);
// });

// // Regex
// let nameRegex  = /^[a-zA-Z]{3,}$/;
// let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// let passRegex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// myForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   let valid = true;

//   inputs.forEach(function(input) {
//     let error = input.nextElementSibling;

 
//     if (input.value.trim() === "") {
//       error.textContent = "required";
//       valid = false;
//     } else {
//       error.textContent = "";
//     }

  
//     if (input.id === "firstName" && input.value.trim() !== "" && !nameRegex.test(input.value.trim())) {
//       error.textContent = "First name must be at least 3 letters (no numbers or symbols).";
//       valid = false;
//     }

//     if (input.id === "lastName" && input.value.trim() !== "" && !nameRegex.test(input.value.trim())) {
//       error.textContent = "Last name must be at least 3 letters (no numbers or symbols).";
//       valid = false;
//     }

//     if (input.id === "emailAddress" && input.value.trim() !== "" && !emailRegex.test(input.value)) {
//       error.textContent = "Invalid email format.";
//       valid = false;
//     }

//     if (input.id === "pass" && input.value.trim() !== "" && !passRegex.test(input.value)) {
//       error.textContent = "Password must be 8+ chars, with uppercase, lowercase and number.";
//       valid = false;
//     }

//     if (input.id === "confpass") {
//       let pass = document.getElementById("pass").value;
//       if (input.value !== pass) {
//         error.textContent = "Passwords do not match.";
//         valid = false;
//       }
//     }
//   });

//   if (valid) {
//     let newUser = {
//     firstName: document.getElementById("firstName").value,
//     lastName: document.getElementById("lastName").value,
//     email: document.getElementById("emailAddress").value,
//     pass: document.getElementById("pass").value
//   };
//    let users = localStorage.getItem("users");
//   if (users) {
//     users = JSON.parse(users); 
//   } else {
//     users = []; 
//   }
//   users.push(newUser);
//   localStorage.setItem("users", JSON.stringify(users));
//   alert("Registration successful")
//     window.location.href = "login.html";
//   }
// });




//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();

//       let email = document.getElementById("loginEmail").value.trim();
//       let pass = document.getElementById("loginPassword").value;

//       let users = JSON.parse(localStorage.getItem("users")) || [];
//       let user = users.find((u) => u.email === email && u.password === pass);

//       if (!user) {
//         alert("Invalid email or password.");
//         return;
//       }

//       localStorage.setItem("currentUser", JSON.stringify(user));
//       window.location.href = "welcome.html";
//     });
//   }

//   //log in
// // let loginForm = document.querySelector("#form-login");
// // let loginInputs = document.querySelectorAll(".login");

// // loginInputs.forEach(function(input) {
// //   let error = document.createElement("span");
// //   error.className = "error";
// //   error.style.color = "red";
// //   error.style.fontSize = "12px";
// //   error.style.marginLeft = "5px";
// //   input.after(error);
// // });

// // loginForm.addEventListener("submit", function(e) {
// //   e.preventDefault();
// //   let valid = true;

// //   loginInputs.forEach(function(input) {
// //     let error = input.nextElementSibling;
// //     if(input.value.trim() === "") {
// //       error.textContent = "required";
// //       valid = false;
// //     } else {
// //       error.textContent = "";
// //     }
// //   });

// //   if(valid) {
// //     let users = JSON.parse(localStorage.getItem("users") || "[]");
// //     let email = document.getElementById("emailLogin").value;
// //     let pass = document.getElementById("passLogin").value;

// //     let foundUser = users.find(user => user.email === email && user.pass === pass);

// //     if(foundUser) {
// //       alert(`Welcome ${foundUser.firstName}!`);
// //        window.location.href = "welcome.html";
// //       loginForm.reset();
// //     } else {
// //       alert("Invalid email or password.");
// //     }
// //   }
// // });

// Registration (Signup)
// =====================
const myForm = document.querySelector("#form-signup");
const inputs = document.querySelectorAll(".signup");

// إضافة عناصر الخطأ لكل input
inputs.forEach(input => {
  const error = document.createElement("span");
  error.className = "error";
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.style.marginLeft = "5px";
  input.after(error);
});

// Regex للتحقق
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

      // تحقق من الحقول الفارغة
      if (input.value.trim() === "") {
        error.textContent = "Required";
        valid = false;
        return;
      }

      // التحقق من الاسم الأول
      if (input.id === "firstName" && !nameRegex.test(input.value.trim())) {
        error.textContent = "First name must be at least 3 letters (no numbers or symbols).";
        valid = false;
      }

      // التحقق من الاسم الأخير
      if (input.id === "lastName" && !nameRegex.test(input.value.trim())) {
        error.textContent = "Last name must be at least 3 letters (no numbers or symbols).";
        valid = false;
      }

      // التحقق من الإيميل
      if (input.id === "emailAddress" && !emailRegex.test(input.value.trim())) {
        error.textContent = "Invalid email format.";
        valid = false;
      }

      // التحقق من كلمة المرور
      if (input.id === "pass" && !passRegex.test(input.value)) {
        error.textContent = "Password must be 8+ chars, with uppercase, lowercase and number.";
        valid = false;
      }

      // التحقق من تأكيد كلمة المرور
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

// =====================
// Login
// =====================
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

    // تخزين المستخدم الحالي
    localStorage.setItem("currentUser", JSON.stringify(user));

    // الانتقال لصفحة الترحيب
    window.location.href = "welcome.html";
  });
}