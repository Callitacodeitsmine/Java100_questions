document.getElementById('add-employee-btn').addEventListener('click', function () {
    const name = document.getElementById('employee-name').value;
    const age = document.getElementById('employee-age').value;
    const category = document.getElementById('Department').value;
    const Phone = document.getElementById('employee-phone').value;
    const email = document.getElementById('employee-email').value;
    const DOB = document.getElementById('employee-DOB').value;
    const Salary = document.getElementById('employee-Salary').value;

    if (name && age && category && Phone && email && DOB && Salary) {
        const table = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
        const rowCount = table.rows.length + 1;

        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${category}</td>
            <td>${Phone}</td>
            <td>${email}</td>
            <td>${DOB}</td>
            <td>${Salary}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editemployee(this)">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteemployee(this)">Delete</button>
            </td>
        `;

        document.getElementById('employee-form').reset();
    } else {
        alert('Please fill in all fields');
    }
});

function deleteemployee(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editemployee(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const name = prompt('Enter new name:', cells[1].innerText);
    const age = prompt('Enter new age:', cells[2].innerText);
    const category = prompt('Enter new category:', cells[5].innerText);



    if (name && age && employeeClass && category) {
        cells[1].innerText = name;
        cells[2].innerText = age;
        cells[5].innerText = category;
    } else {
        alert('Please enter valid values for all fields');
    }
}