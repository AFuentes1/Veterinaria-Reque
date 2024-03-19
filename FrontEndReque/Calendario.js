// Obtener el elemento del calendario
var calendar = document.getElementById("calendar");

// Crear un array con los días de la semana
var daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Obtener la fecha actual
var currentDate = new Date();

// Función para renderizar el calendario
function renderCalendar(year, month) {
    var firstDayOfMonth = new Date(year, month, 1);
    var lastDayOfMonth = new Date(year, month + 1, 0);
    var numDaysInMonth = lastDayOfMonth.getDate();
    var startingDayOfWeek = firstDayOfMonth.getDay();

    // Crear la tabla del calendario
    var table = '<table>';
    table += '<thead><tr>';
    daysOfWeek.forEach(function(day) {
        table += '<th class="dayOfWeek">' + day + '</th>'; // Añadir clase 'dayOfWeek'
    });
    table += '</tr></thead>';
    table += '<tbody>';

    var day = 1;
    // Crear las filas y celdas del calendario
    for (var i = 0; i < 6; i++) {
        table += '<tr>';
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < startingDayOfWeek) {
                table += '<td></td>';
            } else if (day > numDaysInMonth) {
                break;
            } else {
                var className = '';
                if (currentDate.getDate() === day && currentDate.getMonth() === month && currentDate.getFullYear() === year) {
                    className = 'selected';
                }
                table += '<td class="' + className + '" data-day="' + daysOfWeek[j] + '" data-date="' + year + '-' + (month + 1) + '-' + day + '">' + day + '</td>'; // Añadir atributos de datos para el día de la semana y la fecha
                day++;
            }
        }
        table += '</tr>';
    }

    table += '</tbody>';
    table += '</table>';

    calendar.innerHTML = table;

    // Agregar evento click a todas las celdas del calendario
    var cells = calendar.querySelectorAll('td');
    cells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            // Si ya está seleccionada, deseleccionarla
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
            } else { // Si no está seleccionada, seleccionarla y deseleccionar las demás celdas
                var selectedCells = calendar.querySelectorAll('.selected');
                selectedCells.forEach(function(selectedCell) {
                    selectedCell.classList.remove('selected');
                });
                this.classList.add('selected');
            }
        });
    });
}

// Renderizar el calendario para el mes actual
renderCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Función para mostrar el modal de confirmación de horario
function showModalHorarioConfirmacion() {
    var modalHorarioConfirmacion = document.getElementById("myModalHorarioConfirmacion");
    modalHorarioConfirmacion.style.display = "block";
}

// Función para ocultar el modal de confirmación de horario
function hideModalHorarioConfirmacion() {
    var modalHorarioConfirmacion = document.getElementById("myModalHorarioConfirmacion");
    modalHorarioConfirmacion.style.display = "none";
}