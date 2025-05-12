let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    function mostrarHoraActualizada() {
        // Obtener la fecha actual
        const fechaActual = new Date();
    
        // Formatear la hora
        const hora = fechaActual.getHours().toString().padStart(2, '0');
        const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
        const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
        const horaFormateada = `${hora}:${minutos}:${segundos}`;
    
        // Mostrar la hora actualizada en el elemento HTML con el ID "hora"
        document.getElementById("hora").innerText = horaFormateada;
    }
    
    // Llamar a la función mostrarHoraActualizada() para mostrar la hora actualizada al cargar la página
    mostrarHoraActualizada();
    
    // Actualizar la hora cada segundo
    setInterval(mostrarHoraActualizada, 1000);

    // Mostrar la fecha y la hora en las casillas correspondientes
    document.getElementById("fecha").innerText = fechaFormateada;
    document.getElementById("hora").innerText = horaFormateada;
});