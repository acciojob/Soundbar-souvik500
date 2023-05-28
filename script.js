//your JS code here. If required.
//your JS code here. If required.
let appl = document.getElementById("appl");
let boo = document.getElementById("boo");
let gasp = document.getElementById("gasp");
let tada = document.getElementById("tada");
let vic = document.getElementById("vic");
let wrg = document.getElementById("wrg");
let aud = document.getElementById("audio");

appl.addEventListener('click', myFunc);
boo.addEventListener('click', myFunc);
gasp.addEventListener('click', myFunc);
tada.addEventListener('click', myFunc);
vic.addEventListener('click', my//your JS code here. If required.
const buttons = document.getElementById("buttons").children;
const stopButton = document.getElementsByClassName("stop")[0];
const sounds = [];

// Push all sounds in the "sounds" array
for (let i = 1; i <= buttons.length - 1; i++) {
  sounds.push(new Audio(`sounds/sound${i}.mp3`));
}

// Add event listeners to the buttons
for (let i = 0; i < buttons.length - 1; i++) {
  buttons[i].addEventListener("click", () => {
    sounds[i].currentTime = 0;
    sounds[i].play();
  });
}

// Add event listener to the stop button
stopButton.addEventListener("click", () => {
  sounds.forEach(sound => sound.pause());
});
Func);
wrg.addEventListener('click', myFunc);

function myFunc() {
	aud.play();
}
function pause() {
	aud.pause();	
}