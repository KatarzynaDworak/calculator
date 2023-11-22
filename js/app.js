const defaultResult = 0;
let currentResult = defaultResult;

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
    const logEntry = {
        operation: "ADD",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function subtract() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("-", initialResult, enteredNumber);
    const logEntry = {
        operation: "SUBTRACT",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function multiply() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("*", initialResult, enteredNumber);
    const logEntry = {
        operation: "MULTIPLY",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function devide() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("/", initialResult, enteredNumber);
    const logEntry = {
        operation: "DEVIDE",
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);

