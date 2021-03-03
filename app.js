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
    $('#input').text(firstNumber);
  } else {
    secondNumber += parseFloat(attr);
    secondNumber = secondNumber.substring(0, 13);
    $('#input').text(secondNumber);
  }
};

let itemOperator = (firstNumber, secondNumber, attr) => {
  if (firstNumber && !secondNumber) {
    operator = attr;
    history = `${firstNumber} ${operator}`.substring(0, 15);

    $('#history').text(history);
    $('#input').empty();
  }
};

let itemDecimal = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = `${firstNumber.toString()}` + '.';
    $('#input').text(firstNumber);
  } else {
    secondNumber = `${secondNumber.toString()}` + '.';
    $('#input').text(secondNumber);
  }
};

/* Operations for different ids */

let equal = (firstNumber, secondNumber, operator) => {
  if (firstNumber && secondNumber) {
    firstNumber = operate(firstNumber, secondNumber, operator).toExponential(7);

    $('#input').text(firstNumber);
    $('#history').empty();

    secondNumber = '';
    operator = '';
  }
};

let clear = () => {
  $('#history').empty();
  $('#input').empty();

  operator = '';
  firstNumber = '';
  secondNumber = '';
};

let backSpace = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = firstNumber.slice(0, -1);
    $('#input').text(firstNumber);
  } else {
    secondNumber = secondNumber.slice(0, -1);
    $('#input').text(secondNumber);
  }
};

let percentage = () => {
  if (firstNumber && !secondNumber) {
    firstNumber = firstNumber * 0.01;
    $('#input').text(firstNumber);
  } else {
    secondNumber = secondNumber * 0.01;
    $('#input').text(secondNumber);
  }
};

/* Declaring empty variables */
let history = '';
let firstNumber = '';
let secondNumber = '';
let answer = 0;
let operator = '';

/* Calculations */
$(document).click((event) => {
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

$(document).keypress((event) => {
  if ($(`#${event.key}`).hasClass('item number')) {
    itemNumber(operator, event.key);
  } else if ($(`#${event.key}`).hasClass('item operator')) {
    itemOperator(firstNumber, secondNumber, event.key);
  } else if ($(`#${event.key}`).hasClass('item other')) {
    if (event.target.id === 'equal') {
      equal(firstNumber, secondNumber, operator);
    } else if (event.target.id === 'clear') {
      clear();
    } else if (event.target.id === 'backspace') {
      backSpace();
    } else if (event.target.id === '%') {
      percentage();
    }
  } else if ($(`#${event.key}`).hasClass('item decimal')) {
    itemDecimal(firstNumber, secondNumber);
  }
});
