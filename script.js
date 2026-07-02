// ===============================
// TEENIE LOGIN - SCRIPT.JS
// ===============================

// PASSWORD TOGGLE

const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");

toggleButton.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        toggleButton.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

    } else {

        passwordInput.type = "password";

        toggleButton.innerHTML =
            '<i class="fa-regular fa-eye"></i>';
    }
});


// ===============================
// FORM SUBMIT ANIMATION
// ===============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const button = document.querySelector(".login-btn");

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Success';

        button.style.boxShadow =
            "0 0 30px rgba(0,255,140,.8)";

    }, 1800);

});


// ===============================
// FLOATING PARTICLES
// ===============================

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    const size =
        Math.random() * 4 + 2;

    particle.style.position = "absolute";

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.borderRadius = "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.background =
        Math.random() > 0.5
            ? "#ff00c8"
            : "#00bfff";

    particle.style.opacity =
        Math.random() * 0.6;

    particle.style.animation =
        `floatParticle ${5 + Math.random() * 10}s linear infinite`;

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particleContainer.appendChild(particle);
}


// ===============================
// CREATE PARTICLE ANIMATION
// ===============================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

    0% {
        transform:
        translateY(0px);
        opacity:0;
    }

    20% {
        opacity:0.7;
    }

    100% {
        transform:
        translateY(-120px);
        opacity:0;
    }

}

`;

document.head.appendChild(style);
