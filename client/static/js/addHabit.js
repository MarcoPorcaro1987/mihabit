const modal = document.querySelector('#modal');
const modalHeader = modal.querySelector('habitTitle');
const modalContent = modal.querySelector('habitDescription');
const modalFrequency = modal.querySelector('habitFrequency');
const modalTarget = modal.querySelector('target');

modal.addEventListener('submit', submitHabit);



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


// function appendHabits(data){
//     data.habits.forEach(appendHabit);
// };

// function appendHabit(habitData){
    // const newRow = document.createElement('tr');
    // const dogLi = formatDogTr(dogData, newRow)
    // dogsList.append(newRow);





// 	// const habitGrid = document.querySelector("#habitGrid");
// 	// habitGrid.insertAdjacentElement("beforeend", `<h3 class="comment">${i+1}. ${data.comments[i].comment}</h3><h4 class="comment">-${data.comments[i].author}</h4>`);
//     // const habitTitle = document.createElement('');
// 	// habitTitle.textContent = data.habitName;
//     //habitGrid.appendChild(habitTitle);
//     //return habitData
// };


//i think is for local storage and not db
// submitButton.addEventListener("click", () => {
// 	document.querySelector("#habitTitle").value = localStorage.setItem('habit_name');
// 	document.querySelector("#habitDescription").value = localStorage.setItem('habit_description');
//     document.querySelector("#habitFrequency").value = localStorage.setItem('habit_frequency');
//     document.querySelector("#target").value = localStorage.setItem('frequency_target');
// });
