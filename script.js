function signup() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("message").innerText = "Fill all fields!";
        return;
    }

    localStorage.setItem(user, pass);

    document.getElementById("message").innerText = "Account created!";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedPassword = localStorage.getItem(user);

    if (savedPassword === pass) {
        window.location.href = "home.html";
    } else {
        document.getElementById("message").innerText = "Wrong login details!";
    }
}
