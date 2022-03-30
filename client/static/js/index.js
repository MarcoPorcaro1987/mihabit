document.addEventListener("DOMContentLoaded", registerListeners)

const registerForm = document.querySelector('.hide-form')
const loginDetails = document.querySelector('#login-form')


// Event listener to display/hide register form and login details

function registerListeners() {
    const registerBtn = document.querySelector('#register-btn')
    const backBtn = document.querySelector('#back-btn')

    registerBtn.addEventListener("click", e => {
        showForm(registerForm)
    })

    function showForm(form) {
        form.style.display = "block" 
        loginDetails.style.display = "none"
        registerBtn.style.display = "none"
        backBtn.style.display = "block"
    }
    
    backBtn.addEventListener("click", e => {
        loginDetails.style.display = "block" 
        registerBtn.style.display = "block"
        backBtn.style.display = "none"
        registerForm.style.display = "none"
    })

}




// Confirming passwords on registration 

let password = document.querySelector('#register-password')
let confirmPassword = document.querySelector('#confirm-password')
password.onchange = checkPasswords;
confirmPassword.onkeyup = checkPasswords;

function checkPasswords() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match')
    } else {
        confirmPassword.setCustomValidity('')
    }
}



// Handle login and register data 

// current user login

async function requestLogin(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target))) 
        }
        const r = await fetch(`http://localhost:3000/auth/login`, options) //change when deployed to heroku
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        login(data);
    } catch (err) {
        console.warn(`Error: ${err}`);
    }
}


// registering user

async function requestRegistration(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target))) //change when deplyed to heroku
        }
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        requestLogin(e);
    } catch (err) {
        console.warn(err);
    }
}

function login(data) {
    localStorage.setItem('token', data.token)
    let userInfo = jwt_decode(data.token);
    localStorage.setItem('email', userInfo.email)
    localStorage.setItem('username', userInfo.username);
    location.hash = '#feed'; //unsure if correct
}

function logout() {
    localStorage.clear();
    location.hash = '#login'
}