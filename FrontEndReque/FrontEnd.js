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
    var modalAcercaDe = document.getElementById('myModalAcercaDe');
    var btnAcercaDe = document.getElementById("openModalLinkAcercaDe");
    var spanAcercaDe = document.getElementsByClassName("closeAcercaDe")[0];

    //Funciones para abrir y cerrar el modal
    btnAcercaDe.onclick = function() {
        modalAcercaDe.style.display = "block";
    }

    //cuando el usuario haga click en la X, cerrar el modal
    spanAcercaDe.onclick = function() {
        modalAcercaDe.style.display = "none";
    }

    //cuando el usuario haga click fuera del modal, cerrar el modal
    window.addEventListener('click', function(event) {
        if (event.target == modalAcercaDe) {
            modalAcercaDe.style.display = "none";
        }
    });
}

);
