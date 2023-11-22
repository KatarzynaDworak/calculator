const defaultResult = 0;
let currentResult = defaultResult;

const add(prevResult, enteredNumber) {
    const prevResult = currentResult
    const enteredNumber = +userInput.value;
    
    const result = prevResult + enteredNumber;
}

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);