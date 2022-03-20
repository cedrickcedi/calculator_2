import './style.css'

let internalDisplay = "";

let firstNumber = 0;
let secondNumber = 0;
let operand = "";

let displayInternalDisplay = document.getElementById("display");
let displayFirstNumber = document.getElementById("first-number");
let displaySecondNumber = document.getElementById("second-number");
let displayOperand = document.getElementById("operand");
let displayTotal = document.getElementById("total");

function add() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "+";
    displayOperand.innerText = operand;
    
    let sum = firstNumber + secondNumber;        
    firstNumber = sum;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = sum;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
    operand = "";
}

function minus(){
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "-";
    displayOperand.innerText = operand;
    
    let difference = firstNumber - secondNumber;        
    firstNumber = difference;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = difference;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
    operand = "";
}

document.getElementById("add").onclick = function() {  
    if (internalDisplay === "") {
        return;
    } if (firstNumber === 0) {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
        operand = "+";
        displayOperand.innerText = operand;
            
    } else if (firstNumber !== 0){
        add();
    }
}

document.getElementById("minus").onclick = function() {  
    if (internalDisplay === "") {
        return
    
    } if (firstNumber === 0 ) {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
        operand = "-";
        displayOperand.innerText = operand;
            
    } else if (firstNumber !== 0) {
        minus();    
    }
}

document.getElementById("equals").onclick = function() {
    if (internalDisplay === "") {
        return;

    } else if (operand === "+") {      
            secondNumber = parseInt(internalDisplay);
            displaySecondNumber.innerText = secondNumber;

            let sum = firstNumber + secondNumber;
            internalDisplay = sum;
            displayInternalDisplay.innerText = internalDisplay;
        
            firstNumber = sum;
            displayFirstNumber.innerText = firstNumber;
            operand = "";
            displayOperand.innerText = operand;
            secondNumber = 0;
            displaySecondNumber.innerText = secondNumber;
            internalDisplay = "";
    
    } else if (operand === "-") {      
        secondNumber = parseInt(internalDisplay);
        displaySecondNumber.innerText = secondNumber;

        let difference = firstNumber - secondNumber;
        firstNumber = difference;
        displayFirstNumber.innerText = firstNumber;
    
        firstNumber = difference;
        displayFirstNumber.innerText = firstNumber;
        internalDisplay = "";
        displayInternalDisplay.innerText = internalDisplay;
        operand = "";
        displayOperand.innerText = operand;
        secondNumber = "";
        displaySecondNumber.innerText = secondNumber;
    }
}

document.getElementById("clear").onclick = function() {
    firstNumber = 0;
    secondNumber = 0;
    internalDisplay = "";
    operand = "";

    displayFirstNumber.innerText = firstNumber;
    displaySecondNumber.innerText = secondNumber;
    displayInternalDisplay.innerText = internalDisplay;
    displayOperand.innerText = operand;
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

