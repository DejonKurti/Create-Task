/* const key = document.querySelectorAll('.key'),

function playNote(key){ 
    switch (key) {
        case 'C':
            
    }
}; */

//the switch and case above will be used when I eventually integrate guitar sounds

const keys = document.querySelectorAll(".key"),  //holds the .key elements
    note = document.querySelector(".nowplaying"),  //placeholder for note being played
    hints = document.querySelectorAll(".hints");

function playNote(e) {  //listener that will execute a function named playNote
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;  //check for key to avoid errors 

    const keyNote = key.getAttribute("data-note");  //retreives data-note (note being played) to be inserted later

    key.classList.add("playing"); //add class "playing" to trigger the CSS animations
    note.innerHTML = keyNote;  //displays note being played from "data-note"
    audio.currentTime = 0;  //this resets the audio before it plays--prevents overlap of notes
    audio.play();
}

function soundTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
} 

function hintsOn(e, index) {
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

function instruction() {
    alert('Hover over the piano to see the keybinds!');
}

instruction();

hints.forEach(hintsOn);  //.forEach calls function for each element 

keys.forEach(key => key.addEventListener("transitionend", soundTransition));

window.addEventListener("keydown", playNote);  //when you press down on the keyboard, calls the function



const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

