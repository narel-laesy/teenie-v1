const form =
document.getElementById("loginForm");

const message =
document.getElementById("message");

form.addEventListener("submit",(e)=>{

```
e.preventDefault();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value.trim();

if(email === "" || password === ""){

    message.textContent =
    "Please fill all fields.";

    return;
}

message.textContent =
"Login successful!";
```

});
