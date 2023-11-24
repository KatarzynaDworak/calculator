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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput;
    const initialResult = currentResult;
    let mathOperator;
    
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculateResult === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === "DEVIDE") {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    outputResult(currentResult, calcDescription);
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add() {
    calculateResult("ADD");
}

function subtract() {
    calculateResult("SUBTRACT");
}

function multiply() {
    calculateResult("MULTIPLY");
}

function devide() {
   calculateResult("DEVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);

