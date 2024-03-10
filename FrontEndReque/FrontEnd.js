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

    //cuando el usuario haga click fuera del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }
);

document.addEventListener('DOMContentLoaded', function() {
    //Obtener elementos necesarios del DOM
    var modalEmergencias = document.getElementById('myModalEmergencias');
    var btnEmergencias  = document.getElementById("openModalLinkEmergencias");
    var spanEmergencias  = document.getElementsByClassName("closeEmergencias")[0];
    var nombreUsuarioInput = document.getElementById("nombreUsuario");
    var segundoModal = document.getElementById("segundoModal")
    //Funciones para abrir y cerrar el modal
    btnEmergencias.onclick = function() {
        modalEmergencias.style.display = "block";
        nombreUsuarioInput.style.display = "block";
    }

    //cuando el usuario haga click en la X, cerrar el modal
    spanEmergencias.onclick = function() {
        modalEmergencias.style.display = "none";
    }

    //cuando el usuario haga click fuera del modal, cerrar el modal
    window.addEventListener('click', function(event) {
        if (event.target == modalEmergencias ) {
            modalEmergencias.style.display = "none";
        }
    });

    document.getElementById("confirmarNombre").addEventListener('click', function() {
        modalEmergencias.style.display = "none";
        segundoModal.style.display = "block";
    });
}

);
