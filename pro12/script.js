document.getElementById('Checker').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    let result = '';

    function SimpleVotingSystem(number) {
        if (number >= 18 && number < 100) {
            return 1;
        }
        else{
            return 0
        }
    }

    if(SimpleVotingSystem(number) === 1) {
        result = `You elidgible to vote.`;
    } 
    else{
        result = `You are not elidgible to vote.`;
    }

    document.getElementById('result').textContent = result;
});