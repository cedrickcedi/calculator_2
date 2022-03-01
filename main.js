import './style.css'

/* constructor enables you to provide any custom initialization that must be done 
before any other methods can be called on an instantiated object*/
class Calculator {
    constructor (calcuComputationText, calcuResultText) {
        this.calcuComputationText = calcuResultText
        this.calcuResultText = calcuResultText /* When used in an object method, this refers to the object */
        this.clear()
    }
    
    clear() {
        this.calcuResult = ''
        this.calcuComputation = ''
        this.operation = undefined
    }

    delete() {
        this.calcuResult = this.calcuResult.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.calcuResult.includes('.')) return /* if number is equal to a period and this string includes a period, return (stop) */
        this.calcuResult = this.calcuResult.toString() + number.toString() /* toString() returns a number as a string */
    }
    /* && means 'and' (x < 10 && y > 1) is true */
    /* === equal value and equal type, "x === 5" is true */

    chooseOperation(operation) {
        if (this.calcuResult === '') return
        if (this.calcuComputation !== '') { /* !== is not equal value or not equal type "x !== 5" false */
            this.compute()
        }
        this.operation = operation
        this.calcuComputation = this.calcuResult
        this.calcuResult = ''
    }

    compute() {
        let computation
        const comp = parseFloat(this.calcuComputation)
        const res = parseFloat(this.calcuResult)
        if (isNaN(comp) || isNaN(res)) return /* || means "or" (x == 5 || y == 5) is false */
        switch (this.operation) {
            case '+':
                computation = comp + res
                break
            case '-':
                computation = comp - res
            default:
                return
        }
        this.calcuResult = computation
        this.operation = undefined
        this.calcuComputation = ''
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
        this.calcuResult.innerText =
      this.getDisplayNumber(this.calcuResult)
    if (this.operation != null) {
      this.calcuComputation.innerText =
        `${this.getDisplayNumber(this.calcuComputation)} ${this.operation}`
    } else {
      this.calcuComputationText.innerText = ''
    }
  }
}

/* To return all matches (not only the first), use the querySelectorAll() */
const numberButtons = document.querySelectorAll ('[number]')
const operationButtons = document.querySelectorAll ('[operation]')
const equalsButton = document.querySelector ('[equals]')
const allClearButton = document.querySelector ('[all-clear]')
const deleteButton = document.querySelector ('[delete]')
const calcuComputationText = document.querySelector ('[calcu-computation]')
const calcuResultText = document.querySelector ('[calcu-result]')

const calculator = new Calculator(calcuComputationText, calcuResultText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
/* => Arrow functions allow us to write shorter function syntax */

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) /* innerText Return the text content of an element or node */
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