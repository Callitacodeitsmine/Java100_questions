document.getElementById('Checker').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    let result = '';

    function checkPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    if (isNaN(number)) {
        result = 'Please enter a valid number.';
    } else {
        if (checkPrime(number)) {
            result = `${number} is a prime number.`;
        } else {
            result = `${number} is not a prime number.`;
        }
    }

    document.getElementById('result').textContent = result;
});
