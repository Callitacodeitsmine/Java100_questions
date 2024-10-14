document.getElementById('Checker').addEventListener('click', function () {
    const number = parseFloat(document.getElementById('number').value);
    let result = '';

    function reverseNumber(number) {
        if (number < 0) {
            return 'Factorial is not defined for negative numbers';
        }
        let resultcheck = 1;
        for (let i = 1; i <= number; i++) {
            resultcheck *= i;
        }
        return resultcheck;
    }    

    if (isNaN(number)) {
        result = 'Please enter a valid number.';
    } else {
        const reversed = reverseNumber(number);
        result = `The factorial of ${number} is ${reversed}.`;
    }

    document.getElementById('result').textContent = result;
});
