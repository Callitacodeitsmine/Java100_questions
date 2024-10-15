document.addEventListener('DOMContentLoaded', function () {
    let array = [];

    // Add element to the array
    document.getElementById('addElement').addEventListener('click', function () {
        const newElement = document.getElementById('arrayElement').value;

        if (newElement !== '') {
            array.push(newElement);
            document.getElementById('arrayElement').value = '';

            document.getElementById('arrayDisplay').textContent = `Array: [${array.join(', ')}]`;
            document.getElementById('delete').textContent = `Delete`;
        }
    });

    // Clear the array and update display
    document.getElementById('delete').addEventListener('click', function () {
        array.length = 0; // Clear the array
        document.getElementById('arrayDisplay').textContent = 'Array: []'; // Update the array display
        document.getElementById('delete').textContent = 'Delete'; // Update the delete display
    });
});