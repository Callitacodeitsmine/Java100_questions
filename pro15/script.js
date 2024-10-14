document.getElementById('Checker').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    let result = '';

    function SimpleVotingSystem(number) {
        if (number%4 === 0) {
            return 1;
        }
        else{
            return 0
        }
    }

    if(SimpleVotingSystem(number) === 1) {
        result = `Leap Year.`;
    } 
    else{
        result = `Not a Leap Year.`;
    }

    document.getElementById('result').textContent = result;
});