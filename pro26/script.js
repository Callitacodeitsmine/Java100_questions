document.getElementById('add-employee-btn').addEventListener('click', function () {
    const name = document.getElementById('employee-name').value;

    if (name) {
        const table = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
        const rowCount = table.rows.length + 1;

        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${name}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editemployee(this)">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteemployee(this)">Delete</button>
            </td>
        `;

        document.getElementById('employee-form').reset();
    } else {
        alert('Please fill in the Text');
    }
});

function deleteemployee(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editemployee(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const name = prompt('Enter new Text:', cells[1].innerText);

    if (name) {
        cells[1].innerText = name;
    } else {
        alert('Please enter a valid Text');
    }
}