import './style.css'

let internalDisplay = "";

let firstNumber = 0;
let secondNumber = 0;
let operand = "";

let displayInternalDisplay = document.getElementById("display");
let displayFirstNumber = document.getElementById("first-number");
let displaySecondNumber = document.getElementById("second-number");
let displayOperand = document.getElementById("operand");


//FUNCTIONS SECTION

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
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function addThenMinusSign(){
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "-";
    displayOperand.innerText = operand;
    
    let sum = firstNumber + secondNumber;        
    firstNumber = sum;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = sum;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = ""; 
}

function addThenMultiplySign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "x";
    displayOperand.innerText = operand;
    
    let sum = firstNumber + secondNumber;        
    firstNumber = sum;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = sum;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
}

function addThenDivideSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "/";
    displayOperand.innerText = operand;
    
    let sum = firstNumber + secondNumber;        
    firstNumber = sum;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = sum;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
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
}

function minusThenAddSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "+";
    displayOperand.innerText = operand;
    
    let difference = firstNumber - secondNumber;        
    firstNumber = difference;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = difference;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
}

function minusThenMultiplySign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "x";
    displayOperand.innerText = operand;
    
    let difference = firstNumber - secondNumber;        
    firstNumber = difference;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = difference;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
}

function minusThenDivideSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "/";
    displayOperand.innerText = operand;
    
    let difference = firstNumber - secondNumber;        
    firstNumber = difference;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = difference;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
}

function multiplication() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "x";
    displayOperand.innerText = operand;
    
    let product = firstNumber * secondNumber;        
    firstNumber = product;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = product;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function multiplyThenAddSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "+";
    displayOperand.innerText = operand;
    
    let product = firstNumber * secondNumber;        
    firstNumber = product;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = product;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function multiplyThenMinusSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "-";
    displayOperand.innerText = operand;
    
    let product = firstNumber * secondNumber;        
    firstNumber = product;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = product;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function multiplyThenDivideSign() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "/";
    displayOperand.innerText = operand;
    
    let product = firstNumber * secondNumber;        
    firstNumber = product;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = product;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";  
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function division() {
    secondNumber = parseInt (internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "/"
    displayOperand.innerText = operand;

    let quotient = firstNumber / secondNumber;
    firstNumber = quotient;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = quotient;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function divisionThenAddSign() {
    secondNumber = parseInt (internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "+"
    displayOperand.innerText = operand;

    let quotient = firstNumber / secondNumber;
    firstNumber = quotient;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = quotient;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function divisionThenMinusSign() {
    secondNumber = parseInt (internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "-"
    displayOperand.innerText = operand;

    let quotient = firstNumber / secondNumber;
    firstNumber = quotient;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = quotient;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function divisionThenMultiplySign() {
    secondNumber = parseInt (internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    operand = "x"
    displayOperand.innerText = operand;

    let quotient = firstNumber / secondNumber;
    firstNumber = quotient;
    displayFirstNumber.innerText = firstNumber;
    internalDisplay = quotient;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
    secondNumber = 0;
    displaySecondNumber.innerText = secondNumber;
}

function equalsSum() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;

    let sum = firstNumber + secondNumber;
    internalDisplay = sum;
    displayInternalDisplay.innerText = internalDisplay;

    operand = "";
    //displayOperand.innerText = operand;
    firstNumber = 0;
    //displayFirstNumber.innerText = firstNumber;
    secondNumber = 0;
    //displaySecondNumber.innerText = secondNumber;
}

function equalsDifference() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;

    let difference = firstNumber - secondNumber;
    internalDisplay = difference;
    displayInternalDisplay.innerText = internalDisplay;

    operand = "";
    firstNumber = 0;
    secondNumber = 0;
}

function equalsProduct() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    
    let product = firstNumber * secondNumber;
    internalDisplay = product;
    displayInternalDisplay.innerText = internalDisplay;

    operand = "";
    firstNumber = 0;
    secondNumber = 0;
}

function equalsQuotient() {
    secondNumber = parseInt(internalDisplay);
    displaySecondNumber.innerText = secondNumber;
    
    let quotient = firstNumber / secondNumber;
    internalDisplay = quotient;
    displayInternalDisplay.innerText = internalDisplay;

    operand = "";
    firstNumber = 0;
    secondNumber = 0;
}


//OPERAND SECTION

document.getElementById("add").onclick = function() {  
    if (internalDisplay === "") {
        return;

    } if (firstNumber === 0 && operand === "") {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        operand = "+";
        displayOperand.innerText = operand;
        internalDisplay = "";
            
    } else if (firstNumber !== 0 && operand === "+"){
        add();
    
    } else if (firstNumber !== 0 && operand === "-") {
        minusThenAddSign();

    } else if (firstNumber !== 0 && operand === "x") {
        multiplyThenAddSign();
    
    } else if (firstNumber !== 0 && operand === "/") {
        divisionThenAddSign();
    }
 }

document.getElementById("minus").onclick = function() {  
    if (internalDisplay === "") {
        return;

    } if (firstNumber === 0 && operand === "") {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        operand = "-";
        displayOperand.innerText = operand;
        internalDisplay = "";
            
    } else if (firstNumber !== 0 && operand === "+") {
        addThenMinusSign();

    } else if (firstNumber !== 0 && operand === "-") {
        minus();    
    
    } else if (firstNumber !== 0 && operand === "x") {
        multiplyThenMinusSign();
    
    } else if (firstNumber !== 0 && operand === "/") {
        divisionThenMinusSign();
    }
}

document.getElementById("multiply").onclick = function() {
    if (internalDisplay === "") {
        return;

    } if (firstNumber === 0 && operand === "") {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        operand = "x";
        displayOperand.innerText = operand;
        internalDisplay = "";
    
    } else if (firstNumber !== 0 && operand === "+"){
        addThenMultiplySign();
    
    } else if (firstNumber !== 0 && operand === "-") {
        minusThenMultiplySign();

    } else if (firstNumber !== 0 && operand === "x") {
        multiplication();
    
    } else if (firstNumber !== 0 && operand === "/") {
        divisionThenMultiplySign();
    }
}

document.getElementById("divide").onclick = function() {
    if (internalDisplay === "") {
        return;
    
    } if (firstNumber === 0 && operand === "") {
        firstNumber = parseInt(internalDisplay);
        displayFirstNumber.innerText = firstNumber;
        operand = "/";
        displayOperand.innerText = operand;
        internalDisplay = "";
    
    } else if (firstNumber !== 0 && operand === "+") {
        addThenDivideSign();
    
    } else if (firstNumber !== 0 && operand === "-") {
        minusThenDivideSign();
    
    } else if (firstNumber !== 0 && operand === "x") {
        multiplyThenDivideSign();
    
    } else if (firstNumber !== 0 && operand === "/") {
        divide();
    }
}

document.getElementById("equals").onclick = function() {
    if (internalDisplay === "") {
        return;

    } else if (operand === "+") { 
        equalsSum();    
    
    } else if (operand === "-") {
        equalsDifference();   
    
    } else if (operand === "x") {
        equalsProduct();
    
    } else if (operand === "/") {
        equalsQuotient();
    }
}

document.getElementById("clear-entry").onclick = function() {
    internalDisplay = 0;
    displayInternalDisplay.innerText = internalDisplay;
    internalDisplay = "";
}

document.getElementById("clear").onclick = function() {
    firstNumber = "First Number";
    operand = "Operand";
    secondNumber = "Second Number";
    internalDisplay = 0;

    displayFirstNumber.innerText = firstNumber;
    displaySecondNumber.innerText = secondNumber;
    displayInternalDisplay.innerText = internalDisplay;
    displayOperand.innerText = operand;
    firstNumber = 0;
    operand = "";
    secondNumber = 0;
    internalDisplay = "";
}


//NUMBER AND OPERAND BUTTONS SECTION

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

document.getElementById("decimal").onclick = function() {
        if (!internalDisplay.includes(".")) {
            internalDisplay += ".";
            display.innerText = internalDisplay;
        }
}
