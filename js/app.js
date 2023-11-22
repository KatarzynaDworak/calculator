const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return +userInput.value;
}

function calculationDescription(oparator, resultBeforeCalc, calcNumber) {
    const calcDescription = `(${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function add() {
    const enteredNumber = getUserNumberInput;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    calculationDescription("+", currentResult, enteredNumber);
}

function subtract() {
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

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
