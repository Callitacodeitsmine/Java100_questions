document.getElementById('checkButton').addEventListener('click', function () {
    const principle = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    let result = '';

    if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
        result = 'Please enter valid numbers for all fields.';
    } else {
        result = (principle * rate * time) / 100;
        result = `Simple Interest is: ${result.toFixed(2)}`;
    }

    document.getElementById('result').textContent = result;
});
