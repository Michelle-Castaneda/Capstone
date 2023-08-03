//console.log("mood.js file is connected")

let taskStatus = document.querySelector('input[name="taskStatus"]:checked').value;




//FEATURE COUNTER WHEN THE MOOD IS SELECTED

// let happyCounter = 0;

// //when the happyCount is clicked, increment happyCount++

// //find the target btn in HTML
// let happyBtn = document.querySelector('#happy-face')

// function happyCount() {
//     happyCounter++;
//     let selectedface = document.getElementById('happy-face-mood');
//     if (selectedface.classList.contains('selected')) {
//         selectedface.classList.remove('selected');
//     } else {
//         selectedface.classList.add('selected');
//     }
//     console.log(happyCounter);
// }

//combine the selector(target) with the callback function
//happyBtn.addEventListener('click', happyCount);


//“Why do you feel like this?”

// axios
// .get(`http://localhost:4040/api/mood/${paramsInput.value}`)
// .then(res => addToView([res.data]))