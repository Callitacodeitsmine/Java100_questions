let accounts = [];
let loggedInAccount = null;

document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    const password = document.getElementById('password').value;

    const accountNumber = 'ACC' + Math.floor(Math.random() * 1000000);
    const account = {
        accountNumber,
        name,
        address,
        phone,
        email,
        balance: initialDeposit,
        password
    };

    accounts.push(account);
    alert(`Account created successfully! Your Account Number is ${accountNumber}.`);
    document.getElementById('createAccountForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const accountNumber = document.getElementById('loginAccountNumber').value;
    const password = document.getElementById('loginPassword').value;

    const account = accounts.find(acc => acc.accountNumber === accountNumber && acc.password === password);

    if (account) {
        loggedInAccount = account;
        document.getElementById('accountHolderName').textContent = account.name;
        document.getElementById('accountBalance').textContent = account.balance.toFixed(2);
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('accountLogin').style.display = 'none';
        document.getElementById('accountCreation').style.display = 'none';
    } else {
        alert('Invalid account number or password');
    }
});

document.getElementById('depositForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('depositAmount').value);

    if (amount > 0 && loggedInAccount) {
        loggedInAccount.balance += amount;
        document.getElementById('accountBalance').textContent = loggedInAccount.balance.toFixed(2);
        alert(`Successfully deposited $${amount}`);
        document.getElementById('depositForm').reset();
    } else {
        alert('Invalid deposit amount.');
    }
});

document.getElementById('withdrawForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('withdrawAmount').value);

    if (amount > 0 && loggedInAccount && loggedInAccount.balance >= amount) {
        loggedInAccount.balance -= amount;
        document.getElementById('accountBalance').textContent = loggedInAccount.balance.toFixed(2);
        alert(`Successfully withdrew $${amount}`);
        document.getElementById('withdrawForm').reset();
    } else {
        alert('Invalid withdrawal amount or insufficient funds.');
    }
});

function logout() {
    loggedInAccount = null;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('accountLogin').style.display = 'block';
    document.getElementById('accountCreation').style.display = 'block';
    alert('Logged out successfully');
}
