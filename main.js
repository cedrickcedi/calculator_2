import './style.css'

/* constructor enables you to provide any custom initialization that must be done 
before any other methods can be called on an instantiated object*/
class Calculator {
    constructor (calcucomputationText, calcuresultText) {
        this.calcucomputationText = calcuresultText
        this.calcuresultText = calcuresultText /* When used in an object method, this refers to the object */
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
