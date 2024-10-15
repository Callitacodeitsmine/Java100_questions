document.addEventListener('DOMContentLoaded', function() {
    const createAccountForm = document.getElementById('createAccountForm');
    const loginForm = document.getElementById('loginForm');
    const accountCreationDiv = document.getElementById('accountCreation');
    const loginSectionDiv = document.getElementById('loginSection');
    const dashboardDiv = document.getElementById('dashboard');

    let account = null; // Placeholder for account information

    // Handle account creation
    createAccountForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get account details
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
        const password = document.getElementById('password').value;

        // Create the account (you can store this info however you want, like a backend or localStorage)
        account = {
            name,
            address,
            phone,
            email,
            balance: initialDeposit,
            password,
            accountNumber: Math.floor(Math.random() * 1000000) // Generate a random account number
        };

        alert(`Account created successfully! Your account number is ${account.accountNumber}`);

        // Clear form inputs
        createAccountForm.reset();

        // Hide account creation and show the login form
        accountCreationDiv.style.display = 'none';
        loginSectionDiv.style.display = 'block';
    });

    // Handle login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const enteredAccountNumber = document.getElementById('loginAccountNumber').value;
        const enteredPassword = document.getElementById('loginPassword').value;

        // Check if the entered credentials match the created account
        if (account && account.accountNumber == enteredAccountNumber && account.password === enteredPassword) {

            // Hide login form and show the dashboard
            loginSectionDiv.style.display = 'none';
            dashboardDiv.style.display = 'block';

            // Update dashboard with account info
            document.getElementById('accountHolderName').textContent = account.name;
            document.getElementById('accountBalance').textContent = account.balance.toFixed(2);
        } else {
            alert('Invalid account number or password. Please try again.');
        }
    });

    // Handle logout
    window.logout = function() {
        // Hide dashboard and show login form again
        dashboardDiv.style.display = 'none';
        loginSectionDiv.style.display = 'block';
    };

    // Handle deposit
    document.getElementById('depositForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const depositAmount = parseFloat(document.getElementById('depositAmount').value);

        if (depositAmount > 0) {
            account.balance += depositAmount;
            document.getElementById('accountBalance').textContent = account.balance.toFixed(2);
            alert(`Successfully deposited $${depositAmount.toFixed(2)}`);
        } else {
            alert('Please enter a valid deposit amount.');
        }
    });

    // Handle withdrawal
    document.getElementById('withdrawForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);

        if (withdrawAmount > 0 && withdrawAmount <= account.balance) {
            account.balance -= withdrawAmount;
            document.getElementById('accountBalance').textContent = account.balance.toFixed(2);
            alert(`Successfully withdrew $${withdrawAmount.toFixed(2)}`);
        } else {
            alert('Invalid withdrawal amount. Please ensure you have sufficient funds.');
        }
    });
});
