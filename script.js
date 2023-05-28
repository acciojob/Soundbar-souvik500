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
vic.addEventListener('click', myFunc);
wrg.addEventListener('click', myFunc);

function myFunc() {
	aud.play();
}
function pause() {
	aud.pause();	
}