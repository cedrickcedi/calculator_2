import './style.css'

/* constructor enables you to provide any custom initialization that must be done 
before any other methods can be called on an instantiated object*/
class Calculator {
    constructor (previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText
      this.currentOperandText = currentOperandText 
        this.clear()
    }
    /* When used in an object method, 'this' refers to the object */
    
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return 
      this.currentOperand = this.currentOperand.toString() + number.toString() 
    }
    /* if number is equal to a period and this string includes a period, return (stop) 
     toString() returns a number as a string 
     && means 'and' (x < 10 && y > 1) is true 
     === equal value and equal type, "x === 5" is true */

    /* !== is not equal value or not equal type "x !== 5" false */
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') { 
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    /* || means "or" (x == 5 || y == 5) is false */
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
    /* parseFloat() method parses a value as a string and returns the first number */

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
}

/* To return all matches (not only the first), use the querySelectorAll() */
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)

/* forEach() method calls a function for each element in an array */
numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
/* => Arrow functions allow us to write shorter function syntax */

/* innerText Return the text content of an element or node */
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) 
        calculator.updateDisplay()
    })
})
/*  addEventListener() method attaches an event handler to the specified element */

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