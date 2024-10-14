document.getElementById('Checker').addEventListener('click', function () {
    const sub1 = parseInt(document.getElementById('Subject1').value);
    const sub2 = parseInt(document.getElementById('Subject2').value);
    const sub3 = parseInt(document.getElementById('Subject3').value);
    const sub4 = parseInt(document.getElementById('Subject4').value);
    const sub5 = parseInt(document.getElementById('Subject5').value);

    let result = '';

    const number = sub1 + sub2 + sub3 + sub4 + sub5;
    const percentageof = number/5;

    if(percentageof > 90) {
        result = `Grade A`;
    }
    else if(percentageof > 80) {
        result = `Grade B`;
    }
    else if(percentageof > 70) {
        result = `Grade C`;
    }
    else if(percentageof > 60) {
        result = `Grade D`;
    }
    else if(percentageof > 50) {
        result = `Grade E`;
    }
    else{
        result = `Grade F`;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('grade').textContent = `Your Percetage is: ${percentageof}`;
});