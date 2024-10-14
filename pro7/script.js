let balance = 1000; // Initial balance

document.getElementById('withdrawButton').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    let result = '';

    if (isNaN(amount) || amount <= 0) {
        result = 'Please enter a valid amount.';
    } else if (amount > balance) {
        result = 'Insufficient funds.';
    } else {
        balance -= amount;
        result = `Withdrawal successful. New balance: $${balance.toFixed(2)}`;
    }

    document.getElementById('result').textContent = result;
});

document.getElementById('depositButton').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    let result = '';

    if (isNaN(amount) || amount <= 0) {
        result = 'Please enter a valid amount.';
    } else {
        balance += amount;
        result = `Deposit successful. New balance: $${balance.toFixed(2)}`;
    }

    document.getElementById('result').textContent = result;
});

document.getElementById('balanceButton').addEventListener('click', function () {
    const result = `Your current balance is: $${balance.toFixed(2)}`;
    document.getElementById('result').textContent = result;
});
