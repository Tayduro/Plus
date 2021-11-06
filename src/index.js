import Decimal from 'decimal.js';

function error(event) {
  const input = event.target;
  const errorDiv = input.nextSibling;

  if (input.value.includes(' ')) {
    errorDiv.innerHTML = 'Это не число';
    return;
  }

  const value = Number(input.value);
  const errorMessage = 'Это не число';

  if (value) {
    errorDiv.innerHTML = '';
  }
  if (!value || !Number.isFinite(value)) {
    errorDiv.innerHTML = errorMessage;
  }
  if (value === 0) {
    errorDiv.innerHTML = '';
  }
}

function calculator() {
  const n1 = Number(document.getElementById('firstInput').value);
  const n2 = Number(document.getElementById('secondInput').value);
  const result = Decimal.sum(n1, n2);
  if (result) {
    if (document.getElementById('result') !== null) {
      document.getElementById('result').remove();
    }
    const thirdDiv = document.createElement('div');
    thirdDiv.id = 'result';
    document.body.append(thirdDiv);
  }
  document.getElementById('result').innerHTML = result;

  if (
    document.querySelector('.secondError-message').innerHTML === 'Это не число' ||
    document.querySelector('.firstError-message').innerHTML === 'Это не число'
  ) {
    document.getElementById('result').innerHTML = 'Это не число';
  }
}

function ready() {
  const { body } = document;

  const firstInput = document.createElement('input');
  firstInput.id = 'firstInput';
  firstInput.addEventListener('input', error);
  body.append(firstInput);

  const firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'secondError-message');
  body.append(firstDiv);

  const secondInput = document.createElement('input');
  secondInput.addEventListener('input', error);
  secondInput.id = 'secondInput';
  body.append(secondInput);

  const secondDiv = document.createElement('div');
  secondDiv.setAttribute('class', 'secondError-message');
  body.append(secondDiv);

  const button = document.createElement('button');
  button.addEventListener('click', calculator);
  button.id = 'button';
  body.append(button);
  document.getElementById('button').innerHTML = 'Посчитать';
}

document.addEventListener('DOMContentLoaded', ready);
