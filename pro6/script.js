document.getElementById('circleButton').addEventListener('click', function () {
    const radius = parseFloat(document.getElementById('Radius').value);
    let result = '';

    if (isNaN(radius)) {
        result = 'Please enter a valid radius.';
    } else {
        const area = Math.PI * radius * radius;
        const perimeter = 2 * Math.PI * radius;
        result = `Circle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
    }

    document.getElementById('circleResult').textContent = result;
});

document.getElementById('rectangleButton').addEventListener('click', function () {
    const length = parseFloat(document.getElementById('Length_R').value);
    const breadth = parseFloat(document.getElementById('Breath_R').value);
    let result = '';

    if (isNaN(length) || isNaN(breadth)) {
        result = 'Please enter valid dimensions for the rectangle.';
    } else {
        const area = length * breadth;
        const perimeter = 2 * (length + breadth);
        result = `Rectangle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
    }

    document.getElementById('rectangleResult').textContent = result;
});

document.getElementById('triangleButton').addEventListener('click', function () {
    const length = parseFloat(document.getElementById('Length_T').value);
    const breadth = parseFloat(document.getElementById('Breath_T').value);
    let result = '';

    if (isNaN(length) || isNaN(breadth)) {
        result = 'Please enter valid dimensions for the triangle.';
    } else {
        const area = (length * breadth) / 2;
        const hypotenuse = Math.sqrt(length * length + breadth * breadth);
        const perimeter = length + breadth + hypotenuse;
        result = `Triangle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
    }

    document.getElementById('triangleResult').textContent = result;
});
