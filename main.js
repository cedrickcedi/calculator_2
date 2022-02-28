import './style.css'

/* constructor enables you to provide any custom initialization that must be done 
before any other methods can be called on an instantiated object*/
class Calculator {
    constructor (calcucomputationText, calcuresultText) {
        this.calcucomputationText = calcuresultText
        this.calcuresultText = calcuresultText /* When used in an object method, this refers to the object */
        this.clear()
    }
    
    clear() {
        this.calcuresult = ''
        this.calcucomputation = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.calcuresult.includes('.')) return /* if number is equal to a period and this string includes a period, return (stop) */
        this.calcuresult = this.calcuresult.toString() + number.toString()
    }

    chooseOperation(operation) {
        this.operation = operation
        this.calcucomputation = this.calcuresult
        this.calcuresult = ''
    }

    compute() {

    }

    updateDisplay() {
        this.calcuresultText.innerText = this.calcuresult
        this.calcucomputationText.innerText = this.calcucomputation
    }
}

/* To return all matches (not only the first), use the querySelectorAll() */
const numberButtons = document.querySelectorAll ('[number]')
const operationButtons = document.querySelectorAll ('[operation]')
const equalsButton = document.querySelector ('[equals]')
const allclearButton = document.querySelector ('[all-clear]')
const deleteButton = document.querySelector ('[delete]')
const calcucomputationText = document.querySelector ('[calcu-computation]')
const calcuresultText = document.querySelector ('[calcu-result]')

const calculator = new Calculator(calcucomputationText, calcuresultText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})