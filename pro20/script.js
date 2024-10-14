document.getElementById('checkButton').addEventListener('click', function () {
    const number = document.getElementById('numberInput').value;
    const multiplierLimit = document.getElementById('numbermulti').value;
    let result = '';

    if (number === '' || multiplierLimit === '' || isNaN(number) || isNaN(multiplierLimit)) {
        result = 'Please enter valid numbers.';
    } else {
        for (let i = 1; i <= multiplierLimit; i++) {
            result += number + ' x ' + i + ' = ' + (number * i) + '<br>';
        }
    }

    document.getElementById('result').innerHTML = result;
});