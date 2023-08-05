//const { getRoutine } = require("../server/controller");
//const axios = require('axios');

const toDoButton = document.getElementById('todoBtn')
const displaySection = document.querySelector('#toDoList')
const optionalBtn = document.getElementById('optionalTaskBtn')
const holdingDivTasks = document.getElementById('displayAllTasks')




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
    console.log('Button clicked Routine')
    routines(e)
});

createRoutineCard = (routineArr) => { //takes an array of routines
    displaySection.innerHTML = "";
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



function optionalTask (e) { 
    e.preventDefault()
    axios.get('http://localhost:4040/tasks')
    .then(res => {
        console.log(res.data);
        createTasksCard(res.data) 
    })
    .catch(err => console.error(err));
}
optionalTaskBtn.addEventListener('click', (e) => { 
    console.log('Button clicked Tasks')
    optionalTask(e)
});



createTasksCard = (tasksArr) => { 
    displayAllTasks.innerHTML = "";
    tasksArr.forEach(task => { 
        const holdingDivTasks = document.createElement('div')
        holdingDivTasks.innerHTML = `
        <ul> 
            <li>${task.task_description}</li>
            <li>${task.task_date}</li>
            <li>${task.task_status}</li>
        </ul>
        `
        displayAllTasks.appendChild(holdingDivTasks);

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.innerText = "Delete Task";
        console.log(task.task_id)
        //deleteTaskBtn.setAttribute('onClick', () => deletingTask(task.task_id))
        deleteTaskBtn.addEventListener('click', () => deletingTask(task.task_id)); // deleteTask is called with the task_id
        holdingDivTasks.appendChild(deleteTaskBtn); // add delete button to each task's div


        const updateTaskBtn = document.createElement('button');
        updateTaskBtn.innerText = "Update Task";
        updateTaskBtn.addEventListener('click', () => {
            
            //prompt the user to enter new values for the description, date, and status of the task
            const newDescription = prompt("Enter new description:");
            const newDate = prompt("Enter new date:");
            const newStatus = prompt("Enter new status:");

            updatingTask(task.task_id, newDescription, newDate, newStatus);
        });
        holdingDivTasks.appendChild(updateTaskBtn);

    });
}

function deletingTask(taskId) {
    console.log('Deleting Task')
    axios.delete(`http://localhost:4040/tasks/${taskId}`) 
    .then(res => console.log(res.data)) 
    .catch((err) => {
        console.log(err)
        alert('Error deleting the task')
    });
}

let taskInput = document.getElementById("taskInput");
let dateInput = document.getElementById("dateInput");
let statusInputs = document.getElementsByName("taskStatus");
let createTaskBtn = document.getElementById("createTask");

function creatingTask (e) { 
    e.preventDefault()

    let taskStatus;
    for(let i = 0; i < statusInputs.length; i++) {
        if(statusInputs[i].checked){
            taskStatus = statusInputs[i].value;
            break;
        }
    }

    const bodyNewTask = {
        task_description: taskInput.value,
        task_date: dateInput.value,
        task_status: taskStatus
    }
    axios.post('http://localhost:4040/tasks', bodyNewTask)
    .then(res => createTasksCard(res.data))
    .catch(err => console.error(err))
}

createTaskBtn.addEventListener('click', creatingTask);


function updatingTask (taskId, taskDescription, taskDate, taskStatus) {
    axios.put('http://localhost:4040/tasks/' + taskId, {
        task_description: taskDescription,
        task_date: taskDate,
        task_status: taskStatus
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}
