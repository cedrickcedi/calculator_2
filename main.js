import './style.css'

let internalDisplay = "";

let firstNumber = 0;
let secondNumber = 0;
let operand = "";
let total = "";

let displayInternalDisplay = document.getElementById("display");
let displayFirstNumber = document.getElementById("first-number");
let displaySecondNumber = document.getElementById("second-number");
let displayOperand = document.getElementById("operand");
let displayTotal = document.getElementById("total");

document.getElementById("add").onclick = function() {  
    if (internalDisplay === "") return
    if (firstNumber === 0) {
        firstNumber = parseInt(internalDisplay);
        displayInternalDisplay.innerText = "";
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
        operand = "+";
        displayOperand.innerText = operand;
            
    } else if (firstNumber !== 0){
        secondNumber = parseInt(internalDisplay);
        displaySecondNumber.innerText = secondNumber;
        

        let sum = firstNumber + secondNumber;        
        total = sum;
        displayTotal.innerText = total;
        total = "";
        internalDisplay = "";
    }
}

document.getElementById("minus").onclick = function() {  
    if (internalDisplay === "") return
    if (firstNumber === 0) {
        firstNumber = parseInt(internalDisplay);
        displayInternalDisplay.innerText = "";
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
        operand = "-";
        displayOperand.innerText = operand;
            
    } else if (firstNumber !== 0){
        secondNumber = parseInt(internalDisplay);
        displaySecondNumber.innerText = secondNumber;
        operand = "-";
        displayOperand.innerText = operand;

        let difference = firstNumber - secondNumber;
        firstNumber = difference;
        displayFirstNumber.innerText = firstNumber;
        
        total = difference;
        displayTotal.innerText = total;
        total = "";
        internalDisplay = "";
    }
}

document.getElementById("equals").onclick = function() {
    if (internalDisplay === "") return
       else if (operand === "+") {      
            secondNumber = parseInt(internalDisplay);
            displaySecondNumber.innerText = secondNumber;

            let sum = firstNumber + secondNumber;
            firstNumber = sum;
            displayFirstNumber.innerText = firstNumber;
        
            total = sum;
            displayTotal.innerText = total;
            total = "";
    } 
    else if (operand === "-") {      
        secondNumber = parseInt(internalDisplay);
        displaySecondNumber.innerText = secondNumber;

        let difference = firstNumber - secondNumber;
        firstNumber = difference;
        displayFirstNumber.innerText = firstNumber;
    
        internalDisplay = difference;
        displayInternalDisplay.innerText = internalDisplay;
        internalDisplay = "";
    }
}

document.getElementById("clear").onclick = function() {
    firstNumber = 0;
    secondNumber = 0;
    internalDisplay = "";
    operand = "";
    total = 0;

    displayFirstNumber.innerText = firstNumber;
    displaySecondNumber.innerText = secondNumber;
    displayInternalDisplay.innerText = internalDisplay;
    displayOperand.innerText = operand;
    displayTotal.innerText = total;
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

