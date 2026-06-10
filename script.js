const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

```
event.preventDefault();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value.trim();

if(email === "" || password === ""){

    message.textContent =
    "Please fill in all fields.";

    return;
}

message.textContent =
"Login successful!";
```

});
