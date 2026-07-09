let password = document.getElementById("password");
let userName = document.getElementById("userName");
let loginBtn = document.getElementById("login");
let messageInput = document.getElementById("message");

let user={
    userName:"admin",
    password:"1234"
}

console.log(user);
localStorage.setItem("user", JSON.setItem(user));
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
loginBtn.addEventListener("click", function(){
    if(userName.value ==="storedUser.userName" && password.value ==="1234"){
        window.location.href="admin.html";
        localStorage.setItem("loggedIn", true);
    }
    else{
        messageInput.textContent="Invalid username or password";
        messageInput.classList.add("text-danger");
        messageInput.style.color="red";
    }
})
