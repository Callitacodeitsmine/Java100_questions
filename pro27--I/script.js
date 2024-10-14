// Example conversion rates for African currencies (against USD)
const conversionRates = {
    'ZAR': 0.055, // South African Rand
    'NGN': 0.0013, // Nigerian Naira
    'KES': 0.0069, // Kenyan Shilling
    'GHS': 0.12, // Ghanaian Cedi
    'TZS': 0.00043 // Tanzanian Shilling
};

// Function to convert currency
function convertCurrency(amount, currency) {
    // Assuming conversion to USD for simplicity
    const rate = conversionRates[currency];
    if (rate) {
        return (amount * rate).toFixed(2); // Return converted amount
    } else {
        return "Invalid Currency"; // Handle invalid currency
    }
}

// Function to add a new conversion row
function addConversionRow(amount, currency) {
    const tableBody = document.getElementById("conversionTableBody");
    
    const row = document.createElement("tr");
    
    const amountCell = document.createElement("td");
    amountCell.textContent = amount;
    
    const currencyCell = document.createElement("td");
    currencyCell.textContent = currency;
    
    const convertCell = document.createElement("td");
    const convertButton = document.createElement("button");
    convertButton.textContent = "Convert";
    
    // Set the onclick event to convert the amount
    convertButton.onclick = function() {
        const convertedAmount = convertCurrency(amount, currency);
        alert(`Converted Amount: ${convertedAmount} USD`);
    };
    
    convertCell.appendChild(convertButton);
    
    row.appendChild(amountCell);
    row.appendChild(currencyCell);
    row.appendChild(convertCell);
    
    tableBody.appendChild(row);
}

// Example of adding conversion rows for different African currencies
window.onload = function() {
    addConversionRow(100, 'ZAR'); // South African Rand
    addConversionRow(1000, 'NGN'); // Nigerian Naira
    addConversionRow(500, 'KES'); // Kenyan Shilling
    addConversionRow(200, 'GHS'); // Ghanaian Cedi
    addConversionRow(3000, 'TZS'); // Tanzanian Shilling
};