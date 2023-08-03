//const { getRoutine } = require("../server/controller");
//const axios = require('axios');

const toDoButton = document.getElementById('todoBtn')
const displaySection = document.querySelector('#toDoList')

function routines (e) { //function sends get request to display routines
    e.preventDefault()
    axios.get('http://localhost:4040/routine')
    .then(res => {
        console.log(res.data);
        createRoutineCard(res.data) //logs the returned data and calls createRoutineCard to display the routines
    })
    .catch(err => console.error(err));
}

toDoButton.addEventListener('click', (e) => { //event listener to the button, when clicked, it calls the routines function.
    console.log('Button clicked')
    routines(e)
});

createRoutineCard = (routineArr) => { //takes an array of routines
    const routineTest = routineArr.map(routine => { //for each routine, it creates a new div with a list of the routine's details
        const holdingDiv = document.createElement('div')
        holdingDiv.innerHTML = `
        <ul> 
            <li>${routine.routine_description}</li>
            <li>${routine.routine_frequency}</li>
        </ul>
        `
        displaySection.appendChild(holdingDiv); //appends this div to the displaySection
    })
    return routineTest
}
