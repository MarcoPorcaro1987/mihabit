
const logoutBtn = document.querySelector('.logout-button');
const addHabitBtn = document.querySelector('#addbtn')
logoutBtn.addEventListener('click', logout)
addHabitBtn.addEventListener('click', addHabit)

function logout() {
    localStorage.clear();
    location.hash = '#login'
}