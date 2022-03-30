const loginForm = document.querySelector("#login-form")
const formRegister = document.querySelector('#register-form')


loginForm.addEventListener('submit', r => {
        r.preventDefault()
        const formData = {
            email: r.target.email.value,
            password: r.target.password.value
        }
        console.log(formData)
        requestLogin(JSON.stringify(formData))
    })
    



formRegister.addEventListener('submit', r => {
        r.preventDefault()
        const formData = {
            email: r.target.email.value,
            userName: r.target.username.value,
            password: r.target.password.value
        }
        console.log(formData)
        registration(JSON.stringify(formData))
    })



async function requestLogin(e){
    // e.preventDefault();
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: e
    }
    const r = await fetch('http://localhost:3000/auth/login', options)
    console.log(r)
    const data = await r.json()
    if (data.err) {throw new Error('something went wrong ' + data.err)}
    login(data);
} catch(err) {
    console.warn(`something went wrong ${err}`)
}
}

async function registration(e){
    // e.preventDefault()
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
            body: e
    }
    const r = await fetch('http://localhost:3000/auth/register', options)
    const data = await r.json()
    if (data.err){throw new Error('Something went wrong' + data.err)}
    requestLogin(e)
    } catch(err){
        console.warn(err)
    }
}


function login(data){
    localStorage.setItem('username', data.user);
    location.hash = '../../homepage.html';
}