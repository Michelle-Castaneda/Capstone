const loveNotes = [
    'Your Family Loves you', 
    "We love you", 
    "Today is a beautiful day",
    "Your family cherishes you", 
    "Call Vincent he misses you", 
    "Call Michelle she loves you"
]


let loveNote = document.getElementById('love-note-btn')

function randomNote() { 
    Math.floor(Math.random() * loveNotes.length);
    return loveNotes[randomIndex];
}

loveNote.addEventListener('click', randomNote)




//document.getElementById('note-display-div').innerText = randomNote;



// function instaMichelle () {
// 	window.location.href = "https://www.instagram.com/cm_mkt_michelle/"
// }