const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function renderCalendar(month, year) {
    calendarBody.innerHTML = ''; // Clear the calendar
    monthYear.innerText = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay(); // Get first day of the month
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the month

    let date = 1;
    for (let i = 0; i < 6; i++) { // Create calendar rows
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) { // Create calendar columns (days)
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                // Empty cells for days before the start of the month
                cell.innerHTML = '';
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerHTML = date;
                // Highlight current day
                if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    cell.classList.add('today');
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row); // Append row to the calendar body
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

prevButton.addEventListener('click', prevMonth);
nextButton.addEventListener('click', nextMonth);

renderCalendar(currentMonth, currentYear); // Initial rendering of the calendar
