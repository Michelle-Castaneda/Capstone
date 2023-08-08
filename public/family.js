const loveNotes = [
    'Your Family Loves you Melissa', 
    "Melissa! We love you ", 
    "Melissa, go outside it is a beautiful day",
    "Your family cherishes you Melissa", 
    "Melissa, call Vincent he misses you"
]

let loveNote = document.getElementById('love-note-btn');
let noteDisplayDiv = document.getElementById('note-display-div'); // Added line to get the display element

function randomNote() { 
    let randomIndex = Math.floor(Math.random() * loveNotes.length); // You missed assigning the random index to a variable
    return loveNotes[randomIndex];
}

loveNote.addEventListener('click', function() { 
    noteDisplayDiv.innerText = randomNote(); // Update the text of note-display-div when button is clicked
});


function instaMichelle () {
	window.location.href = "https://www.instagram.com/cm_mkt_michelle/"
}