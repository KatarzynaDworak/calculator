const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return +userInput.value;
}

function add() {
    const enteredNumber = getUserNumberInput;
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract(operator, ) {
    const enteredNumber = getUserNumberInput;
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserNumberInput;
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
}

function devide() {
    const enteredNumber = getUserNumberInput;
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
}

