/* Arthimatic Operations */
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

let operate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return add(firstNumber, secondNumber);
      break;

    case '-':
      return subtract(firstNumber, secondNumber);
      break;

    case '*':
      return multiply(firstNumber, secondNumber);
      break;

    case '/':
      return divide(firstNumber, secondNumber);
      break;
  }
};

/* Operations for different classes */
let itemNumber = (operator, attr) => {
  if (!operator) {
    firstNumber += parseFloat(attr);
    firstNumber = firstNumber.substring(0, 13);
    inputDOM.textContent = firstNumber;
  } else {
    secondNumber += parseFloat(attr);
    secondNumber = secondNumber.substring(0, 13);
    inputDOM.textContent = secondNumber;
  }
};

let itemOperator = (firstNumber, secondNumber, attr) => {
  if (firstNumber && !secondNumber) {
    operator = attr;
    history = `${firstNumber} ${operator}`.substring(0, 15);

    historyDOM.textContent = history;
    inputDOM.textContent = '';
  }
};

let itemDecimal = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = `${firstNumber.toString()}` + '.';
    inputDOM.textContent = firstNumber;
  } else {
    secondNumber = `${secondNumber.toString()}` + '.';
    inputDOM.textContent = secondNumber;
  }
};

/* Operations for different ids */

let equal = (firstNumber, secondNumber, operator) => {
  if (firstNumber && secondNumber) {
    firstNumber = operate(firstNumber, secondNumber, operator);

    if (firstNumber.toString().length > 13) {
      firstNumber = firstNumber.toExponential(7);
    }

    inputDOM.textContent = firstNumber;
    historyDOM.textContent = '';

    secondNumber = '';
    operator = '';
  }
};

let clear = () => {
  historyDOM.textContent = '';
  inputDOM.textContent = '';

  operator = '';
  firstNumber = '';
  secondNumber = '';
};

let backSpace = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = firstNumber.slice(0, -1);
    inputDOM.textContent = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    inputDOM.textContent = secondNumber;
  }
};

let percentage = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = firstNumber * 0.01;
    input.textContent = firstNumber;
  } else {
    secondNumber = secondNumber * 0.01;
    input.textContent = secondNumber;
  }
};

/* Declaring DOM variables */
let inputDOM = document.querySelector('#input');
let historyDOM = document.querySelector('#history');

/* Declaring empty variables */
let history = '';
let firstNumber = '';
let secondNumber = '';
let answer = 0;
let operator = '';

/* Calculations */
document.querySelectorAll('#buttons > div').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.className === 'item number') {
      itemNumber(operator, event.target.id);
    } else if (event.target.className === 'item operator') {
      itemOperator(firstNumber, secondNumber, event.target.id);
    } else if (event.target.className === 'item other') {
      if (event.target.id === 'equal') {
        equal(firstNumber, secondNumber, operator);
      } else if (event.target.id === 'clear') {
        clear();
      } else if (event.target.id === 'backspace') {
        backSpace();
      } else if (event.target.id === '%') {
        percentage();
      }
    } else if (event.target.className === 'item decimal') {
      itemDecimal(firstNumber, secondNumber);
    }
  });
});

document.addEventListener('keypress', (event) => {
  let key = document.getElementById(event.key);

  if (key.classList.contains('number')) {
    itemNumber(operator, event.key);
  } else if (key.classList.contains('operator')) {
    itemOperator(firstNumber, secondNumber, event.key);
  } else if (key.classList.contains('other')) {
    if (event.target.id === 'equal') {
      equal(firstNumber, secondNumber, operator);
    } else if (event.target.id === 'clear') {
      clear();
    } else if (event.target.id === 'backspace') {
      backSpace();
    } else if (event.target.id === '%') {
      percentage();
    }
  } else if (key.classList.contains('decimal')) {
    itemDecimal(firstNumber, secondNumber);
  }
});
