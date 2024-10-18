const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const confirmButton = document.getElementById('confirmButton');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function generateRandomQRCode() {
    const qr = new QRious({
        value: Math.random().toString(36).substring(2, 10).toUpperCase(),
        size: 100
    });
    return qr.toDataURL();
}

function generatePDF(selectedSeats, movie, totalPrice) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const qrCodeDataUrl = generateRandomQRCode();

    // Adding a custom font and styling to the PDF
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 102, 204); // Blue header text
    doc.setFontSize(18);

    // Header section
    doc.text('Movie Ticket', 105, 20, null, null, 'center'); // Centered title
    doc.setDrawColor(0, 102, 204); // Blue border for header
    doc.line(20, 25, 190, 25); // Horizontal line for header

    // Movie details
    doc.setFontSize(14);
    doc.setTextColor(33, 33, 33); // Regular black text
    doc.text(`Movie: ${movie}`, 20, 40);
    doc.text(`Selected Seats: ${selectedSeats.join(', ')}`, 20, 50);
    doc.text(`Total Price: $${totalPrice}`, 20, 60);

    // Adding a background rectangle for the QR code section
    doc.setDrawColor(0, 102, 204);
    doc.setFillColor(240, 248, 255); // Light blue background
    doc.rect(20, 70, 60, 60, 'F'); // QR code box background

    // Adding QR code image to the PDF
    doc.addImage(qrCodeDataUrl, 'PNG', 25, 75, 50, 50);

    // Adding a footer
    doc.setTextColor(128, 128, 128); // Gray text
    doc.setFontSize(10);
    doc.text('Thank you for booking with us!', 105, 150, null, null, 'center');
    doc.text('Enjoy the movie!', 105, 160, null, null, 'center');

    // Optional: draw a border around the ticket
    doc.setDrawColor(0, 102, 204); // Blue border
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 170); // Border of the ticket

    // Save the PDF
    doc.save('movie_ticket.pdf');
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

confirmButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    if (selectedSeatsIndex.length === 0) {
        alert('Please select at least one seat.');
        return;
    }

    const movie = movieSelect.options[movieSelect.selectedIndex].text;
    const totalPrice = count.innerText * ticketPrice;

    const confirmation = confirm(`Confirm your selection:\nMovie: ${movie}\nSeats: ${selectedSeatsIndex.join(', ')}\nTotal: $${totalPrice}`);
    if (confirmation) {
        const selectedSeatNumbers = selectedSeatsIndex.map(index => `Seat ${index + 1}`);
        generatePDF(selectedSeatNumbers, movie, totalPrice);
    }
});