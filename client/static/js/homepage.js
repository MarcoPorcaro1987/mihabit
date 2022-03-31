document.addEventListener('DOMContentLoaded', displayHabits);

const userId = localStorage.getItem('userId') //???


function navbar() {
    const logoutBtn = document.querySelector('.logout-button');
    const addHabitBtn = document.querySelector('#addbtn')
    logoutBtn.addEventListener('click', logout)
    addHabitBtn.addEventListener('click', addHabit) 
}

async function loadHabits(id) {

    fetch(`${API_URL}/users/${id}`, { //check whether route is correct
        headers: new Headers({ 'Authorization': localStorage.getItem('token')})
    })
        .then(resp => {
            return resp.json()
        })
        
        .then(displayHabits)
        .catch(console.warn)
}


async function getHabitByHabitId(habitId) {         ///?????
    try {
        let habit = await fetch(`${API_URL}/habits/${habitId}`, {
            headers: new Headers({ 'Authorization': localStorage.getItem('token') })
        });
        let habitJson = await habit.json();
        return habitJson;
    }catch(err) {
        console.warn;
    }       
}


async function displayHabits(habits) {
    for(let i = 0; i < habits.length; i++) {
        //display habit card
        const card = document.createElement('div')
        const innerCard = document.createElement('div')
        const header = document.createElement('p')
        const tick = document.createElement('i')
        const title = document.createElement('i')
        const dividerLine = document.createElement('hr')
        const divider = document.createElement('div')
        const habitDivider = document.createElement('div')
        const habitList = document.createElement('ul')

        //display name of habit
        const habitCheckBoxArea = document.createElement('li')
        const habitCheckBox = document.createElement('div')
        const habitCheck = document.createElement('input')
        const nameArea = document.createElement('li')
        const habitName = document.createElement('p')

        
        //display habit description
        const habitDescription = document.createElement('p')


        //display habit frequency
        const habitFrequency = document.createElement('p') //unsure if right


        //display frequency target
        const habitTarget = document.createElement('p') //unsure if right

        //update and delete habit 
        const updateAndDelete = createElement('div')
        const updateArea = createElement('a')
        const updateBtn = createElement('button')
        const updateHabitImage = createElement('i')
        const deleteArea = createElement('a')
        const deleteBtn = createElement('button')
        const deleteHabitImage = createElement('i')


        //fill necessary parts with database information
        const habitNameUser = document.createTextNode(`${habit_name}`) //???
        const habitDescriptionUser = document.createTextNode(`${entry.habitDescription}`)
        const habitFrequencyUser = document.createTextNode(`${entry.habitFrequency}`)
        const habitTargetUser = document.createTextNode(`${entry.habitTarget}`)

        //dynamically create classes for elements
        innercard.className = "card-body py-4 px-4 px-md-5"




        //dynamically create id's where needed


        //adding in bootstrap attributes


        //append parts to right structure 
        body.appendChild(card)
        card.appendChild(innerCard)
        innerCard.appendChild(header)
        innerCard.appendChild(tick)
        innerCard.appendChild(title)
        innerCard.appendChild(dividerLine)
        innerCard.appendChild(divider)
        innerCard.appendChild(habitDivider)
        habitDivider.appendChild(habitList)
        habitList.appendChild(habitCheckBoxArea)
        habitCheckBoxArea.appendChild(habitCheckBox)
        habitCheckBox.appendChild(habitCheck)
        habitList.appendChild(nameArea)
        nameArea.appendChild(habitName)
        habitName.appendChild(habitNameUser)
        habitDivider.appendChild(habitDescription)
        habitDescription.appendChild(habitDescriptionUser)
        habitDivider.appendChild(habitFrequency)
        habitFrequency.appendChild(habitFrequencyUser)
        habitDivider.appendChild(habitTarget)
        habitTarget.appendChild(habitTargetUser)
        habitList.appendChild(updateAndDelete)
        updateAndDelete.appendChild(updateArea)
        updateArea.appendChild(updateBtn)
        updateBtn.appendChild(updateHabitImage)
        updateAndDelete.appendChild(deleteArea)
        deleteArea.appendChild(deleteBtn)
        deleteBtn.appendChild(deleteHabitImage)


        //add delete and update attributes 
        deleteBtn.setAttribute('id', `deleteBtn${habits[i].id}`);
        deleteHabitImage(`deleteBtn${habits[i].id}`, habits[i].id)



    }
}





function addHabit() {}


function logout() {
    localStorage.clear();
    location.hash = '#login'
}