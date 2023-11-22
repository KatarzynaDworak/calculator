const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return +userInput.value;
}

function add() {
    const enteredNumber = getUserNumberInput;
    const calcDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
}