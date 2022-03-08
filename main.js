import './style.css'

let internalDisplay = "";

let display = document.getElementById ("output");

document.getElementById ("number1").onclick = function () {
    display += "1";
    internalDisplay();
}