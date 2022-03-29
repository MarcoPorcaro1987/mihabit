const loginForm = document.querySelector('#login-form')
const formRegister = document.querySelector('#register-form')
if(loginForm){
    loginForm.addEventListener('submit', r => {
        r.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        requestLogin(JSON.stringify(formData))
    })
}

if(formRegister){
    formRegister.addEventListener('submit', r => {
        r.preventDefault()
        const formData = {
            email: e.target.email.value,
            userName: e.target.username.value,
            password: e.target.password.value
        }
        registration(JSON.stringify(formData))
    })
}


async function requestLogin(e){
    e.preventDefault();
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
    const r = await fetch('http://localhost:3000/login', options)
    console.log(r)
    const data = await r.json()
    if (data.err) {throw new Error('something went wrong ' + data.err)}
    login(data);
} catch(err) {
    console.warn(`something went wrong ${err}`)
}
}

async function registration(e){
    e.preventDefault()
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
    const r = await fetch('http://localhost:3000/register', options)
    const data = await r.json()
    if (data.err){throw new Error('Something went wrong' + data.err)}
    requestLogin(e)
    } catch(err){
        console.warn(err)
    }
}


function login(data){
    localStorage.setItem('username', data.user);
    location.hash = '#feed';
}