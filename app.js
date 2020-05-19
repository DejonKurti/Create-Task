const keys = document.querySelectorAll(".key");  //holds the .key elements
const note = document.querySelector(".nowplaying");  //placeholder for note being played
const hints = document.querySelectorAll(".hints");

function soundChange(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    else if (e.propertyName != "transform") {
        console.log("");
    }
    this.classList.remove("playing");
} 

function hintsOn(e, index) {
    e.setAttribute("style", "change-delay:" + index * 50 + "ms");
}
function errorHandler(e) {
    if (!key) {                         //check for key to avoid errors 
    return;
}  
    else {
    console.log(key);                   //displays notes for users in the console in the case the CSS header does not load
}
    if (key = undefined) {
    console.log(error);
    }

}

function playNote(e) {  //listener that will execute a function named playNote
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    const keyNote = key.getAttribute("data-note");  //retreives data-note (note being played) to be inserted later

    errorHandler();

    key.classList.add("playing"); //add class "playing" to trigger the CSS animations
    note.innerHTML = keyNote;  //displays note being played from "data-note"
    audio.currentTime = 0;  //this resets the audio before it plays--prevents overlap of notes
    audio.play();

    soundChange();
}

function instruction() {
    alert('Hover on the piano keys to see the keybinds!');
}

instruction();

hints.forEach(hintsOn);                               //.forEach calls function for each element 

keys.forEach(key => key.addEventListener("changeend", soundChange));

function pressDown() {
    window.addEventListener("keydown", playNote(e));  //when you press down on the keyboard, calls the function
}


