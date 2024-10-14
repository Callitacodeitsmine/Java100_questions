document.getElementById('Checker').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    let result = '';
    const a = Math.floor(Math.random() * 100) + 1;

    function SimpleVotingSystem(number) {
        if (number === a) {
            return 1;
        }
        else{
            return 0
        }
    }

    if(SimpleVotingSystem(number) === 1) {
        result = `Right guess.`;
    } 
    else{
        result = `Wrong guess.`;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('real_number_was').textContent = `The real number was: ${a}`;
});