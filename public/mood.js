console.log("mood.js file is connected")

// COUNTER FEATURE WHEN THE MOOD IS SELECTED

//find the target btn in HTML
let happyBtn = document.querySelector('#happy-face');
let okBtn = document.querySelector('#ok-face');
let sadBtn = document.querySelector('#sad-face');
let angryBtn = document.querySelector('#angry-face');

let counters = {
  happy: 0,
  ok: 0,
  sad: 0,
  angry: 0
}

function incrementCounter(mood) {
  return function() {
    counters[mood]++;
    document.getElementById(`${mood}-counter`).textContent = counters[mood];
    console.log(`${mood}-counter`, counters[mood]);
  }
}

happyBtn.addEventListener('click', incrementCounter('happy'));
okBtn.addEventListener('click', incrementCounter('ok'));
sadBtn.addEventListener('click', incrementCounter('sad'));
angryBtn.addEventListener('click', incrementCounter('angry'));

//“Why do you feel like this?”

// axios
// .get(`http://localhost:4040/api/mood/${paramsInput.value}`)
// .then(res => addToView([res.data]))
