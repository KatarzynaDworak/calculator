const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [
   liczba1: currentResult,
   działanie: operator,
   liczba2: enteredNumber,
];

function getUserNumberInput() {
   return +userInput.value;
}

function createAndWriteOutput(oparator, resultBeforeCalc, calcNumber) {
    const calcDescription = `(${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function add() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("+", initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("*", initialResult, enteredNumber);
}

function devide() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);

