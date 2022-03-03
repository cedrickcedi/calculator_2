import './style.css'

/*  constructor enables you to provide any custom initialization that must be done 
    before any other methods can be called on an instantiated object */
class Calculator {
    constructor (previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText
      this.currentOperandText = currentOperandText 
        this.clear()
    }
    /*  'this.clear' function is to reset the inputs
        Storage object of the Web Storage API provides access to the session storage or local storage for a particular domain. This allows you to read, add, modify, and delete stored data items */
    
    //below would be the different operations that the calcu will perform

    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined //undefined property indicates that a variable has not been assigned a value, or not declared at all
    }
    /*  clear() function will clear all values */

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    } 
    //delete() function for clearing a single number
    //-1 is used to clear out all digits, if 1 is used, there would always be a remaining one digit regardless if you click CE

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return 
      this.currentOperand = this.currentOperand.toString() + number.toString() 
    }
    /*  appendNumber(number) function determines what will occur every time a user clicks on a number to add to the display
    
        return (stop)  will stop your function if you add multiple periods, only one period is allowed
        toString() returns a number as a string

        && means 'and' 
        
        === equal value and equal type */

    //!== is not equal value or not equal type
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') { 
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    // chooseOperation(operation) function controls what will happen anytime a user clicks on any operation button

    // || means "or" (x == 5 || y == 5) is false
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return 
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    }
    // compute() takes the values inside the calculator and displays the result
    // parseFloat() method parses a value as a string and returns the first number

    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
 
    updateDisplay() {
      this.currentOperandText.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandText.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandText.innerText = ''
    }
  }
  // updateDisplay() function updates the values inside of the output
}

// querySelectorAll() function will allow us to get all elements that match a certain string
// 'const' It defines a constant variable reference to a value
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)
//to have all variables operated to the calcu object, we create a calcu constant and set new calcu, then pass everything from constructor going into it, the pass the previous and current operand text element

/* click() method simulates a mouse-click on an element */
numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
// .updateDisplay method is make sure that the displayed values are constantly updated every time we click on a button on the calculator
// => Arrow functions allow us to write shorter function syntax

// innerText Return the text content of an element or node
// for.each statement is to loop over all the different buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) 
        calculator.updateDisplay()
    })
})
//  addEventListener() method will invoke something whenever the button is clicked

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })