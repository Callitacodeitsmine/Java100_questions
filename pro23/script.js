document.getElementById('add-student-btn').addEventListener('click', function () {
    const name = document.getElementById('student-name').value;
    const age = document.getElementById('student-age').value;
    const studentClass = document.getElementById('student-class').value;

    if (name && age && studentClass) {
        const table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
        const rowCount = table.rows.length + 1;

        const newRow = table.insertRow();

        newRow.innerHTML = `
                    <td>${rowCount}</td>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${studentClass}</td>
                    <td>
                        <button class="action-btn Return-btn disabled" disabled onclick="ReturnStudent(this)">Return</button>
                        <button class="action-btn Burrow-btn" onclick="BurrowStudent(this)">Borrow</button>
                    </td>
                    <td><input type="date" class="Burrow-date" disabled></td>
                    <td><input type="date" class="return-date" disabled></td>
                    <td><input type="radio" name="availability-${rowCount}" value="Available" disable> Available
                        <input type="radio" name="availability-${rowCount}" value="Not Available" disabled> Not Available
                    </td>
                `;

        document.getElementById('student-form').reset();
    } else {
        alert('Please fill in all fields');
    }
});

function BurrowStudent(button) {
    let row = button.closest('tr');

    let borrowDateInput = row.querySelector('.Burrow-date');
    let returnDateInput = row.querySelector('.return-date');
    let returnButton = row.querySelector('.Return-btn');
    let borrowButton = row.querySelector('.Burrow-btn');
    let availabilityRadio = row.querySelector('input[name^="availability"]:checked');

    let today = new Date();
    let formattedToday = today.toISOString().split('T')[0];
    
    borrowDateInput.value = formattedToday;
    borrowDateInput.disabled = true;

    let returnDate = new Date();
    returnDate.setDate(today.getDate() + 7);
    let formattedReturnDate = returnDate.toISOString().split('T')[0];
    
    returnDateInput.value = formattedReturnDate;
    returnDateInput.disabled = true;

    availabilityRadio.checked = false;
    row.querySelector('input[value="Not Available"]').checked = true;

    borrowButton.disabled = true;
    borrowButton.classList.add('disabled');
    returnButton.disabled = false;
    returnButton.classList.remove('disabled');
}

function ReturnStudent(button) {
    let row = button.closest('tr');

    let borrowDateInput = row.querySelector('.Burrow-date');
    let returnDateInput = row.querySelector('.return-date');
    let returnButton = row.querySelector('.Return-btn');
    let borrowButton = row.querySelector('.Burrow-btn');
    let availabilityRadio = row.querySelector('input[name^="availability"]:checked');

    borrowDateInput.value = '';
    returnDateInput.value = '';

    borrowButton.disabled = false;
    borrowButton.classList.remove('disabled');
    returnButton.disabled = true;
    returnButton.classList.add('disabled');

    row.querySelector('input[value="Available"]').checked = true;
}