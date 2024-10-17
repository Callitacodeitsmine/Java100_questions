function generateRandomQRCode() {
    const qr = new QRious({
        value: document.getElementById('email').value, // Using email for QR Code
        size: 100
    });
    return qr.toDataURL();
}

document.getElementById('generatePDFButton').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Set up the resume content
    doc.setFontSize(22);
    doc.text('Resume', 10, 10);

    doc.setFontSize(16);
    doc.text(`Name: ${fullName}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);

    // Add QR Code
    const qrCodeDataUrl = generateRandomQRCode();
    doc.addImage(qrCodeDataUrl, 'PNG', 160, 10, 30, 30); // Add the QR code at the top right corner

    doc.setFontSize(18);
    doc.text('Education', 10, 50);
    doc.setFontSize(12);
    doc.text(education, 10, 60, { maxWidth: 190 });

    doc.setFontSize(18);
    doc.text('Skills', 10, 80);
    doc.setFontSize(12);
    doc.text(skills, 10, 90, { maxWidth: 190 });

    doc.setFontSize(18);
    doc.text('Experience', 10, 110);
    doc.setFontSize(12);
    doc.text(experience, 10, 120, { maxWidth: 190 });

    // Save the PDF
    doc.save(`${fullName}_resume.pdf`);
});
