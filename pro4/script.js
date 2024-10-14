document.getElementById('celsiusToFahrenheitButton').addEventListener('click', function () {
  const number = document.getElementById('temperatureInput').value;
  let result = '';

  if (number === '') {
    result = 'Please enter a number.';
  } else {
    const celsius = parseFloat(number);
    const fahrenheit = (celsius * 9/5) + 32;
    result = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }

  document.getElementById('result').textContent = result;
});

document.getElementById('fahrenheitToCelsiusButton').addEventListener('click', function () {
  const number = document.getElementById('temperatureInput').value;
  let result = '';

  if (number === '') {
    result = 'Please enter a number.';
  } else {
    const fahrenheit = parseFloat(number);
    const celsius = (fahrenheit - 32) * 5/9;
    result = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
  }

  document.getElementById('result').textContent = result;
});
