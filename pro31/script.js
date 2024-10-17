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

    doc.text(`Movie: ${movie}`, 10, 10);
    doc.text(`Seats: ${selectedSeats.join(', ')}`, 10, 20);
    doc.text(`Total Price: $${totalPrice}`, 10, 30);

    // Adding QR code to the PDF
    doc.addImage(qrCodeDataUrl, 'PNG', 10, 40, 50, 50);

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