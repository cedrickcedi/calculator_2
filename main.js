import './style.css'

let internalDisplay = "";

let display = document.getElementById ("display");

document.getElementById("number1").onclick = function() {
    display += "1";
    internalDisplay();
}
