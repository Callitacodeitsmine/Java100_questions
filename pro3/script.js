document.getElementById('checkButton').addEventListener('click', function () {
  const number = document.getElementById('numberInput').value;
  let result = '';

  if (number === '') {
    result = 'Please enter a number.';
  } else if (isNaN(number)) {
    result = 'Invalid input. Please enter a valid number.';
  } else if (number % 2 === 0) {
    result = number + ' is Even';
  } else {
    result = number + ' is Odd';
  }

  document.getElementById('result').textContent = result;
});