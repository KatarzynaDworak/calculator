const defaultResult = 0;
const currentResult = defaultResult;

function add() {
    currentResult = currentResult + +userInput.value;
    outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);


//* currentResult = currentResult + +userInput.value; 
//* currentResult = currentResult + parseInt(userInput.value);
//* oba wiersze powyej zamieniają string na liczbę