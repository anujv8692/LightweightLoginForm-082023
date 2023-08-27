const title = document.getElementById('title');
const nameTF = document.getElementById('nameTF');
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const forgotBtn = document.getElementById('forgotBtn');
const alreadyAUserLine = document.getElementById('alreadyAUserLine');
const newUserLine = document.getElementById('newUserLine');
const loginagainBtn = document.getElementById('loginagainBtn');

signUpBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameTF.style.display="block";
    forgotBtn.style.display = "none";
    loginBtn.value  = "Signup";
    loginBtn.innerHTML = "Signup";
    alreadyAUserLine.style.display = "block";
    newUserLine.style.display = "none";
}

loginagainBtn.onclick = function(){
    title.innerHTML = "Login";
    nameTF.style.display = "none";
    forgotBtn.style.display = "block";
    loginBtn.value  = "Login";
    loginBtn.innerHTML = "Login";
    newUserLine.style.display = "block";
    alreadyAUserLine.style.display = "none";
}