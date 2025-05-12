const calendarElement = document.getElementById('calendar');

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

function renderCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const prevMonthDays = new Date(year, month, 0).getDate();

    const lastDayIndex = new Date(year, month + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    const monthName = months[month];

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevMonthDays - x + 1}</div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    const calendarHtml = `
        <div class="month">
            <h2>${monthName} ${year}</h2>
        </div>
        <div class="days">
            <div class="day">Dom</div>
            <div class="day">Lun</div>
            <div class="day">Mar</div>
            <div class="day">Mié</div>
            <div class="day">Jue</div>
            <div class="day">Vie</div>
            <div class="day">Sáb</div>
            ${days}
        </div>
    `;

    calendarElement.innerHTML = calendarHtml;
}

renderCalendar(currentMonth, currentYear);

// Obtener todos los formularios de comentarios
const commentForms = document.querySelectorAll('.comment-form');

// Agregar un evento de submit a cada formulario
commentForms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        
        // Obtener los valores del formulario
        const name = form.querySelector('input[type="text"]').value;
        const comment = form.querySelector('textarea').value;
        
        // Crear un elemento de comentario
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;
        
        // Agregar el comentario al contenedor de comentarios
        const commentsContainer = form.parentElement.querySelector('.comments');
        commentsContainer.appendChild(commentElement);
        
        // Limpiar el formulario
        form.reset();
    });
});