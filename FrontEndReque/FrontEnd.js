document.addEventListener('DOMContentLoaded', function() {
    //Obtener elementos necesarios del DOM
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("openModalLink");
    var span = document.getElementsByClassName("close")[0];

    //Funciones para abrir y cerrar el modal
    btn.onclick = function() {
        modal.style.display = "block";

    }


    //cuando el usuario haga click en la X, cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    /*
    //cuando el usuario haga click fuera del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } */
});

document.addEventListener('DOMContentLoaded', function() {
    //Obtener elementos necesarios del DOM
    var modalEmergencias = document.getElementById('myModalEmergencias');
    var btnEmergencias  = document.getElementById("openModalLinkEmergencias");
    var spanEmergencias  = document.getElementsByClassName("closeEmergencias")[0];
    var spanEmergencias2  = document.getElementsByClassName("closeEmergencias")[1];
    var spanEmergencias3  = document.getElementsByClassName("closeEmergencias")[2];
    var nombreUsuarioInput = document.getElementById("nombreUsuario");
    var segundoModal = document.getElementById("segundoModal")
    var tercerModal = document.getElementById("tercerModal");


    //Funciones para abrir
    btnEmergencias.onclick = function() {
        modalEmergencias.style.display = "block";
        nombreUsuarioInput.style.display = "block";

    }


    //cuando el usuario haga click en la X, cerrar el modal
    spanEmergencias.onclick = function() {
        modalEmergencias.style.display = "none";

    }
    /*
    //cuando el usuario haga click fuera del modal, cerrar el modal
    window.addEventListener('click', function(event) {
        if (event.target == modalEmergencias ) {
            modalEmergencias.style.display = "none";
        }
    });*/

    //cuando el usuario haga click en el boton de confirmar nombre, cerrar el modal y abrir el segundo modal
    document.getElementById("confirmarNombre").addEventListener('click', function() {
        modalEmergencias.style.display = "none";
        segundoModal.style.display = "block";

    });

    //Cerrar el segundo modal con la X
    spanEmergencias2.onclick = function() {
        segundoModal.style.display = "none";
    }

    /*
    //Cerrar el segundo modal con click afuera
    window.addEventListener('click', function(event) {
        if (event.target == segundoModal) {
            segundoModal.style.display = "none";

        }
    });
    */

    document.getElementById("enviarEmergencia").addEventListener('click', function() {
        segundoModal.style.display = "none";
        tercerModal.style.display = "block";
    });

    //Cerrar el segundo modal con la X
    spanEmergencias3.onclick = function() {
        tercerModal.style.display = "none";
    }
    /*
    window.addEventListener('click', function(event) {
        if (event.target == tercerModal) {
            tercerModal.style.display = "none";

        }
    });   */
});


// Obtener los modales y los botones para cerrarlos
var modalFechas = document.getElementById("myModalFechas");
var modalHorarios = document.getElementById("myModalHorarios");
var spanCloseFechas = document.querySelector(".closeFechas");
var spanCloseHorarios = document.querySelector(".closeHorarios");

/// Funciones para mostrar y ocultar los modales
function showModalFechas() {
    var modalFechas = document.getElementById("myModalFechas");
    modalFechas.style.display = "block";
}

function hideModalFechas() {
    var modalFechas = document.getElementById("myModalFechas");
    modalFechas.style.display = "none";
}

function showModalHorarios() {
    var modalHorarios = document.getElementById("myModalHorarios");
    modalHorarios.style.display = "block";
}

function hideModalHorarios() {
    var modalHorarios = document.getElementById("myModalHorarios");
    modalHorarios.style.display = "none";
}
// Event listeners para los botones de cerrar
spanCloseFechas.onclick = hideModalFechas;
spanCloseHorarios.onclick = hideModalHorarios;

// Event listener para los enlaces dentro de los modales
var linksInsideModalFechas = document.querySelectorAll("#myModalFechas a");
var linksInsideModalHorarios = document.querySelectorAll("#myModalHorarios a");

linksInsideModalFechas.forEach(function(link) {
    link.addEventListener("click", hideModalFechas);
});

linksInsideModalHorarios.forEach(function(link) {
    link.addEventListener("click", hideModalHorarios);
});

// Obtener el elemento del horario selector
var horarioSelector = document.getElementById("horarioSelector");

// Función para renderizar los horarios
function renderHorarios() {
    var horas = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    var horariosHTML = '';
    horas.forEach(function(hora) {
        horariosHTML += '<div class="hora" onclick="seleccionarHorario(this)">' + hora + '</div>';
    });
    horarioSelector.innerHTML = horariosHTML;
}

// Función para seleccionar un horario
function seleccionarHorario(element) {
    // Desmarcar todos los horarios previamente seleccionados
    var horariosSeleccionados = horarioSelector.querySelectorAll('.hora.selected');
    horariosSeleccionados.forEach(function(horaSeleccionada) {
        horaSeleccionada.classList.remove('selected');
    });

    // Marcar el horario seleccionado
    element.classList.add('selected');
}

// Función para confirmar el horario seleccionado y mostrar el modal
function confirmarHorario() {
    var horarioSeleccionado = horarioSelector.querySelector('.hora.selected');
    if (horarioSeleccionado) {
        var horarioSeleccionadoTexto = horarioSeleccionado.textContent;
        var textoModal = document.getElementById("horarioSeleccionadoTexto");
        textoModal.textContent = 'Ha seleccionado el horario: ' + horarioSeleccionadoTexto;
        showModalHorarioConfirmacion();
        hideModalHorarios();
    } else {
        alert('Por favor, seleccione un horario.');
    }
}

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

// Llamar a la función para renderizar los horarios al cargar la página
renderHorarios();


document.addEventListener('DOMContentLoaded', function() {
    var modalEsteticos = document.getElementById('myModalEsteticos');
    var btnEsteticos = document.getElementById("openModalLinkEsteticos");
    var spanEsteticos = document.getElementsByClassName("closeEsteticos")[0];

    btnEsteticos.onclick = function() {
        modalEsteticos.style.display = "block";
    }

    spanEsteticos.onclick = function() {
        modalEsteticos.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var modalHotel = document.getElementById('myModalHotel');
    var btnHotel = document.getElementById("openModalLinkHotel");
    var spanHotel = document.getElementsByClassName("closeHotel")[0];

    btnHotel.onclick = function() {
        modalHotel.style.display = "block";
    }

    spanHotel.onclick = function() {
        modalHotel.style.display = "none";
    }
});

function mostrarHabitacion(nombreHabitacion) {
    var habitaciones = document.getElementsByClassName('descripcionHabitacion');
    for (var i = 0; i < habitaciones.length; i++) {
        habitaciones[i].style.display = 'none';
    }
    document.getElementById(nombreHabitacion).style.display = 'block';
}

function ocultarHabitacion(nombreHabitacion) {
    document.getElementById(nombreHabitacion).style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    var modalProcedimientosVeterinarios = document.getElementById('myModalProcedimientosVeterinarios');
    var btnProcedimientosVeterinarios = document.getElementById("openModalLinkProcedimientosVeterinarios");
    var spanProcedimientosVeterinarios = document.getElementsByClassName("closeProcedimientosVeterinarios")[0];

    btnProcedimientosVeterinarios.onclick = function() {
        modalProcedimientosVeterinarios.style.display = "block";
    }

    spanProcedimientosVeterinarios.onclick = function() {
        modalProcedimientosVeterinarios.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var modalContacto = document.getElementById('myModalContacto');
    var btnContacto = document.getElementById("openModalLinkContacto");
    var spanContacto = document.getElementsByClassName("closeContacto")[0];

    btnContacto.onclick = function() {
        modalContacto.style.display = "block";
    }

    spanContacto.onclick = function() {
        modalContacto.style.display = "none";
    }
});





