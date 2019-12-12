/* const key = document.querySelectorAll('.key'),

function playNote(key){ 
    switch (key) {
        case 'C':
            
    }
}; */

//the switch and case above will be used when I eventually integrate guitar sounds

const keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying"),
    hints = document.querySelectorAll(".hints");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");

    key.classList.add("playing");
    note.innerHTML = keyNote;  //displays note being played
    audio.currentTime = 0;
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

window.addEventListener("keydown", playNote);


