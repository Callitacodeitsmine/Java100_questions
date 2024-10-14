let accounts = [];
let loggedInAccount = null;

document.getElementById('generateButton').addEventListener('click', function () {
    const accountNumber = 'ACC' + Math.floor(Math.random() * 1000000);
    
    document.getElementById('result').textContent = `Generated Account Number: ${accountNumber}`;
    
    document.getElementById('copyButton').style.display = 'inline-block'; 
});

document.getElementById('copyButton').addEventListener('click', function () {
    const accountNumber = document.getElementById('result').textContent.replace('Generated Account Number: ', '');

    navigator.clipboard.writeText(accountNumber)
        .then(() => {
            alert('Account number copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});
