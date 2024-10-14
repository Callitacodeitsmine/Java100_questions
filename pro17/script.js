document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Checker').addEventListener('click', function () {
        const inputString = document.getElementById('String').value;
        let result = '';

        result = reverseString(inputString);

        document.getElementById('result').textContent = result;
    });

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
});
