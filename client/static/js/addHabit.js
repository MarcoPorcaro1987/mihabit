const modal = document.querySelector('#modal');
const modalHeader = modal.querySelector('habitTitle');
const modalContent = modal.querySelector('habitDescription');
const modalFrequency = modal.querySelector('habitFrequency');
const modalTarget = modal.querySelector('target');

modal.addEventListener('submit', submitHabit);// or postHabit !!! i'm not sure which one is correct



function submitHabit(e){
    e.preventDefault();

    const habitData = {
        habit_name: e.target.habit_name.value,
        habit_description: e.target.habit_description.value,
        habit_frequency: e.target.habit_frequency.value,
        frequency_target: e.target.frequency_target.value,
        user:e.target.user_id.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(habitData),
        headers: { "Content-Type": "application/json" }
    };

    const sendData = await fetch(`http://localhost:3000/habit/`, options);//??
        const res = await sendData.json();
        if (res.err){ throw Error(res.err) }
       

};
//!!!!
async function postHabit(habitData) {
    const habitData = {
        habit_name: e.target.habit_name.value,
        habit_description: e.target.habit_description.value,
        habit_frequency: e.target.habit_frequency.value,
        frequency_target: e.target.frequency_target.value,
        user:e.target.user_id.value
    };
	try {
		const options = {
			method: 'POST',
			headers: new Headers({
				Authorization: localStorage.getItem('token'),
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(habitData),
		};
		const id = localStorage.getItem('id');
		const url = `${devURL}/user/${id}/habits`;
		const response = await fetch(url, options);
		const responseJson = await response.json();
		if (responseJson.err) {
			throw new Error(err);
		}
		return responseJson;
	} catch (err) {
		console.warn(err);
	}
}

// function appendHabits(data){
//     data.habits.forEach(appendHabit);
// };

// function appendHabit(habitData){
    





// 	// const habitGrid = document.querySelector("#habitGrid");
// 	// habitGrid.insertAdjacentElement("beforeend", `<h3 class="comment">${i+1}. ${data.comments[i].comment}</h3><h4 class="comment">-${data.comments[i].author}</h4>`);
//     // const habitTitle = document.createElement('');
// 	// habitTitle.textContent = data.habitName;
//     //habitGrid.appendChild(habitTitle);
//     //return habitData
// };

function addNewHabitHomepage(habitData) {
	const habits = document.querySelector('#habitGrid');
	const habit = postHabit(habitData);
	habits.insertBefore("beforeend", habits.firstChild);//?? or should be like <h3 class="comment">${i+1}. ${data.comments[i].comment}</h3>
	return habit;
}


///?????

submitButton.addEventListener("click", () => {
	document.querySelector("#habitTitle").value = localStorage.setItem('habit_name');
	document.querySelector("#habitDescription").value = localStorage.setItem('habit_description');
    document.querySelector("#habitFrequency").value = localStorage.setItem('habit_frequency');
    document.querySelector("#target").value = localStorage.setItem('frequency_target');
});


// to be moved in homepage.js:
async function getAllUserHabits(id) {
	try {
		const options = { headers: new Headers({ Authorization: localStorage.getItem('token') }) };
		const id = localStorage.getItem('id');
		const url = `${devURL}/user/${id}/habits`;
		const response = await fetch(url, options);
		const data = await response.json();
		if (data.err) {
			console.warn(data.err);
		}
		return data;
	} catch (err) {
		console.warn(err);
	}
}

// to be moved in homepage.js:
async function getDataHabitById(id) {
	try {
		const options = { headers: new Headers({ Authorization: localStorage.getItem('token') }) };
		const id = localStorage.getItem('id');
		const url = `${devURL}/user/${id}/habits/${id}`; //i'm not sure that is working because of the 2 id's
		const response = await fetch(url, options);
		const data = await response.json();
		if (data.err) {
			console.warn(data.err);
		}
		return data;
	} catch (err) {
		console.warn(err);
	}
}

// to be moved in homepage.js:
async function deleteHabit(id) {
	try {
		const options = {
			method: 'DELETE',
			headers: new Headers({ Authorization: localStorage.getItem('token') }),
		};
		const id = localStorage.getItem('id'); //id client
		const response = await fetch(`${devURL}/user/${id}/habits/${id}`, options);//i'm not sure that is working because of the 2 id's
		if (response.err) {
			throw Error(err);
		}
	} catch (err) {
		console.warn(err);
	}
}

<<<<<<< HEAD
//must be exported!!
=======
//must be exported!!
>>>>>>> 2c6761c981f813c44fdb6f052dabf478217f02d2
