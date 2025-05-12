function index(){
    var usuario = document.getElementById("Usuario").value;
    var clave = document.getElementById("Clave").value;

    if(usuario ==localStorage.getItem("usuario") && clave ==localStorage.getItem("contra")){
        window.location.href="../web-comidas-main/index.html"
    }
    else{
        alert ("Usuario y Clave incorrecto, Vuelva intentarlo")
    }
}