document.addEventListener('DOMContentLoaded', function () {
    let array = []; 

    document.getElementById('addElement').addEventListener('click', function () {
        const newElement = document.getElementById('arrayElement').value; 

        if (newElement !== '') {
            array.push(newElement);
            document.getElementById('arrayElement').value = '';

            document.getElementById('arrayDisplay').textContent = `Array: [${array.join(', ')}]`;
        }
    });
});