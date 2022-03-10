import './style.css'

let internalDisplay = "";

let firstNumber = 0;
let secondNumber = 0;

let displayInternalDisplay = document.getElementById("display");
let displayFirstNumber = document.getElementById("first-number");
let displaySecondNumber = document.getElementById("second-number");

document.getElementById("add").onclick = function() {  
    if (firstNumber === 0) {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
    
    } else if (firstNumber !== 0) {
        secondNumber = parseInt(internalDisplay);
        displaySecondNumber.innerText = secondNumber;

        let sum = firstNumber + secondNumber;
        firstNumber = sum;
        displayFirstNumber.innerText = firstNumber;
        
        internalDisplay = sum;
        displayInternalDisplay.innerText = internalDisplay;
        internalDisplay = ""; 
    } 
}

document.getElementById("number1").onclick = function() {
    internalDisplay += "1";
    display.innerText = internalDisplay;
}

document.getElementById("number2").onclick = function() {
    internalDisplay += "2";
    display.innerText = internalDisplay;
}

document.getElementById("number3").onclick = function() {
    internalDisplay += "3";
    display.innerText = internalDisplay;
}

document.getElementById("number4").onclick = function() {
    internalDisplay += "4";
    display.innerText = internalDisplay;
}

document.getElementById("number5").onclick = function() {
    internalDisplay += "5";
    display.innerText = internalDisplay;
}

document.getElementById("number6").onclick = function() {
    internalDisplay += "6";
    display.innerText = internalDisplay;
}

document.getElementById("number7").onclick = function() {
    internalDisplay += "7";
    display.innerText = internalDisplay;
}

document.getElementById("number8").onclick = function() {
    internalDisplay += "8";
    display.innerText = internalDisplay;
}

document.getElementById("number9").onclick = function() {
    internalDisplay += "9";
    display.innerText = internalDisplay;
}

document.getElementById("number0").onclick = function() {
    internalDisplay += "0";
    display.innerText = internalDisplay;
}

