/* Arthimatic Operations */
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

let operate = (firstNumber, secondNumber, operation) => {
  return operation === 'add' || operation === '+'
    ? add(firstNumber, secondNumber)
    : operation === 'subtract' || operation === '-'
    ? subtract(firstNumber, secondNumber)
    : operation === 'multiply' || operation === '*'
    ? multiply(firstNumber, secondNumber)
    : divide(firstNumber, secondNumber);
};

let percentage = (number) => (number * 0.01).toString();
let backSpace = (str) => str.slice(0, -1);

let history = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

$(document).click((event) => {
  if (event.target.className === 'item number') {
    if (!operator) {
      firstNumber += event.target.id;
      $('#input').text(firstNumber);
    } else {
      secondNumber += event.target.id;
      $('#input').text(secondNumber);
    }
  } else if (event.target.className === 'item operator') {
    if (firstNumber && !secondNumber) {
      operator = event.target.id;
      history = `${firstNumber} ${operator}`;

      $('#history').text(history);
      $('#input').empty();
    }
  } else if (event.target.className === 'item other') {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (event.target.id === 'equal') {
      if (firstNumber && secondNumber) {
        firstNumber = operate(firstNumber, secondNumber, operator);

        $('#input').text(firstNumber);
        $('#history').empty();

        secondNumber = '';
        operator = '';
      }
    } else if (event.target.id === 'clear') {
      $('#history').empty();
      $('#input').empty();

      operator = '';
      firstNumber = '';
      secondNumber = '';
    } else if (event.target.id === 'backspace') {
      if (firstNumber && !secondNumber) {
        firstNumber = backSpace(firstNumber.toString());
        $('#input').text(firstNumber);
      } else {
        secondNumber = backSpace(secondNumber.toString());
        $('#input').text(secondNumber);
      }
    } else if (event.target.id === '%') {
      if (firstNumber && !secondNumber) {
        firstNumber = percentage(firstNumber);
        $('#input').text(firstNumber);
      } else {
        secondNumber = percentage(secondNumber);
        $('#input').text(secondNumber);
      }
    }
  } else if (event.target.id === '.') {
    if (firstNumber && !secondNumber) {
      firstNumber = `${firstNumber.toString()}` + '.';
      $('#input').text(firstNumber);
    } else {
      secondNumber = `${secondNumber.toString()}` + '.';
      $('#input').text(secondNumber);
    }
  }
});
