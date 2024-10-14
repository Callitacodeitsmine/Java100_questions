document.getElementById('Checker').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    let result = '';

    function fibonacciRecursive(number) {
        if (number === 0) {
            return [0];
        } else if (number === 1) {
            return [0, 1];
        } else {
            let sequence = fibonacciRecursive(number - 1);
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
            return sequence;
        }
    }

    if (isNaN(number) || number <= 0) {
        result = 'Please enter a valid positive number.';
    } else {
        const fibonacciSequence = fibonacciRecursive(number - 1); 
        result = `Fibonacci sequence of ${number} terms: ${fibonacciSequence.join(', ')}.`;
    }

    document.getElementById('result').textContent = result;
});