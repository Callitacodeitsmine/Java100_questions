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
                        <button class="action-btn edit-btn" onclick="editStudent(this)">Edit</button>
                        <button class="action-btn delete-btn" onclick="deleteStudent(this)">Delete</button>
                    </td>
                `;

        document.getElementById('student-form').reset();
    } else {
        alert('Please fill in all fields');
    }
});

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editStudent(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const name = prompt('Enter new name:', cells[1].innerText);
    const age = prompt('Enter new age:', cells[2].innerText);
    const studentClass = prompt('Enter new class:', cells[3].innerText);

    if (name && age && studentClass) {
        cells[1].innerText = name;
        cells[2].innerText = age;
        cells[3].innerText = studentClass;
    } else {
        alert('Please enter valid values for all fields');
    }
}