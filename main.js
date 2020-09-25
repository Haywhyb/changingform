let showbtn = document.getElementById(`button1`);
let hidebtn = document.getElementById(`button2`);
let stylebtn= document.getElementById(`button3`);
let changeColor= document.getElementById(`button4`);
let divcontent = document.getElementById(`contain`);
changeColor.addEventListener(`click`, changeColor1);
// divcontent.style.display="none";
function changeColor1(){ 
let heading1 = document.getElementById(`heading`);
heading1.style.fontSize="20px";
}
showbtn.addEventListener(`click`, show);
function show() {
divcontent.style.display="block" 
}
hidebtn.addEventListener(`click`, showhide)
function showhide() { 
divcontent.style.display="none"
}
stylebtn.addEventListener(`click`, change);
function change() {
    divcontent.style.color="white"
    divcontent.style.backgroundColor="red"
}
show();

