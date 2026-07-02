// ==========================
// TEENIE LOGIN SCRIPT
// ==========================


// PASSWORD TOGGLE

const passwordField =
document.getElementById("password");

const toggleButton =
document.getElementById("togglePassword");


toggleButton.addEventListener("click", () => {

    if (passwordField.type === "password") {

        passwordField.type = "text";

        toggleButton.innerHTML =
        '<i class="fa-regular fa-eye-slash"></i>';

    }

    else {

        passwordField.type = "password";

        toggleButton.innerHTML =
        '<i class="fa-regular fa-eye"></i>';

    }

});


// ==========================
// SIGN IN BUTTON EFFECT
// ==========================

const signInButton =
document.querySelector(".signin-btn");


signInButton.addEventListener("click", (event) => {

    event.preventDefault();

    signInButton.innerHTML =
    "SIGNING IN...";

    signInButton.disabled = true;


    setTimeout(() => {

        signInButton.innerHTML =
        "WELCOME BACK ✓";

        signInButton.style.background =
        "linear-gradient(90deg,#7c3cff,#b66dff)";

    }, 1500);

});


// ==========================
// INPUT FOCUS GLOW
// ==========================

const inputs =
document.querySelectorAll(".input-box");


inputs.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.borderColor =
        "#a85cff";

        box.style.boxShadow =
        "0 0 15px rgba(168,92,255,0.25)";

    });


    box.addEventListener("mouseleave", () => {

        box.style.borderColor =
        "rgba(255,255,255,.06)";

        box.style.boxShadow =
        "none";

    });

});


// ==========================
// FUTURE LOGIN LOGIC
// ==========================

// Example:
//
// loginForm.addEventListener(
// "submit",
// async () => {
//
//     // connect backend here
//
// });
