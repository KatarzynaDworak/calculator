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
    const initialResult = currentResult
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    calculationDescription("+", initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    calculationDescription("-", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
    calculationDescription("*", initialResult, enteredNumber);
}

function devide() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
    calculationDescription("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
