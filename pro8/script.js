document.getElementById('Checker').addEventListener('click', function () {
    const number = parseFloat(document.getElementById('number').value);
    let result = '';

    function reverseNumber(number) {
        const reversedNum = parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
        return reversedNum;
    }    

    if (isNaN(number)) {
        result = 'Please enter a valid number.';
    } else {
        const reversed = reverseNumber(number);
        if (number === reversed) {
            result = `The number is a palindrome: ${number}`;
        } else {
            result = `The number is not a palindrome. Reversed Number: ${reversed}`;
        }
    }

    document.getElementById('result').textContent = result;
});
