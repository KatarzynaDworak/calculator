const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return +userInput.value;
}

function createAndWriteOutput(oparator, resultBeforeCalc, calcNumber) {
    const calcDescription = `(${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function add() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("*", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function devide() {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult
    const calcDescription = `(${currentResult} ${operator} ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
    createAndWriteOutput("/", initialResult, enteredNumber);
    writeToLog("DEVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);

