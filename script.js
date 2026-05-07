function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "paloma" && pass === "1234") {
        window.location.href = "home.html";
    } else {
        document.getElementById("message").innerText = "Wrong login details!";
    }
}
